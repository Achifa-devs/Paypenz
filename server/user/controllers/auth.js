
const { bcrypt, jwt } = require("../../reusables/modules");
const { uuid } = require('uuidv4');
const { IS_EXISTING } = require("../../reusables/functions");
const { neon_db } = require("../../reusables/db");
const maxAge = 90 * 24 * 60 * 60; 

const createToken = (id) => {
    return jwt.sign({ id }, 'user_secret', {
       expiresIn: maxAge
    });
};


async function register_user(req,res) {

    let {
        fname,
        lname,
        email,
        phone,
        gender,
        pwd,
        referral_src,
        provider
    } = req.body;

  
    console.log(fname, lname, email, pwd, phone)

    let hPwd = provider === 'google' ? '' : await bcrypt.hash(pwd, 10);
    let user_id = uuid();


    try {
        new Promise(async(resolve, reject) => {
            let email_check = await IS_EXISTING('users', 'email', email)
            console.log('email_check: ', email_check)
            if(!email_check){
                resolve({bool: true})
            }else{
                reject({bool: false, mssg: 'email exists'})
            }
        })
        .then(async(result) => {
            if (provider === 'local') {
                if (result) {
                    let phone_check = await IS_EXISTING('users', 'phone_number', phone);
                    console.log('phone_check: ', phone_check)
    
                    if(!phone_check){
                        return ({bool: true})
                    }else{
                        return ({bool: false, mssg: 'phone exists'})
                    }
                }else{
                    return ({bool: false, mssg: 'database error'})
                }
            }else{
                return ({bool: true})
            }
        })
        .then((result) => {
            if(result){
                let response = create_new_users()
                if(response){
                    return ({bool: true})
                }else{
                    return ({bool: false, mssg: 'error creating new user'})
                }
            }else{
                return ({bool: false, mssg: 'database error'})
            }
        })
        .then((result) => {
            if(result){
                return ({bool: true})
            }else{
                return ({bool: false, mssg: 'database error'})
            }
        })
        .catch(err => {
            // throw err
            res.status(501).send(err)
        })
    } catch (error) {
        res.status(501).send(error)
        // console.log(error)
    }



    function create_new_users() {
        return(
            neon_db().then((pool) => {
                pool.query(`
                    INSERT INTO users (
                        id,
                        user_id,
                        provider,
                        fname,
                        lname,
                        email,
                        password,
                        phone_number,
                        gender,
                        is_active,
                        last_seen,
                        is_email_verified,
                        is_phone_verified,
                        is_acct_verified,
                        created_at,
                        updated_at,
                        referral_src,
                        language,
                        timezone,
                        pin
                    )
                    VALUES(
                        DEFAULT,
                        '${user_id}',
                        '${provider}',
                        '${fname}',
                        '${lname}',
                        '${email}',
                        '${hPwd}',
                        '${phone}',
                        '${null}',
                        '${false}',
                        '${new Date()}',
                        '${false}',
                        '${false}',
                        '${false}',
                        '${new Date()}',
                        '${new Date()}',
                        '${referral_src}',
                        'en',
                        '+01:00 Africa/Lagos',
                        null
                    )
                `)
                .then((result) => {
                    const token = createToken(user_id);
                    result.rowCount === 1 ? res.status(200).send({bool: true, cookie: token, id: user_id}) : ({bool: false, data: ''})
                })
                .catch(err => {
                    console.log(err)
                    res.status(400).send({bool: false, err: ''})
                })
            
            }).catch(err => console.log(err))
        )
    }
}



async function signin_user(req, res) {
    let {email,pwd,provider} = req.body;
 
    try {
        new Promise((resolve, reject) => {
            neon_db().then(async(pool) => 
                    
                pool.query(`select "id" from "users" where "email" = '${email}'`)
                .then((result) => {
                    if(result.rows.length > 0){
                        const id = result.rows[0].id;
                        resolve(id)
                    }else{
                        reject({bool: false, mssg: "Email is not registered..."});
                    }
                })
                .catch(err => {
                    throw err
                })
                
            );
        })
        .then(async(id) => {
            return(
                neon_db().then(async(pool) => {
                    let database_return_value = await pool.query(
                        `SELECT "user_id","email","password","fname","lname" FROM  "users" WHERE "id" = '${id}'`
                    )
                    .then(result => result.rows[0])
                    .catch(err => console.log(err))
    
                    return database_return_value
                })
                
            )
            
        })
        .then(async(user) => { 
            if(user){
                if (provider !== 'google') {
                    const auth = await bcrypt.compare(pwd, user.password);
    
                    if (auth) {
                        const token = createToken(user.user_id);
                        res.status(200).send({bool: true, id: user.user_id, cookie: token});
            
                    }else{
                        res.status(400).send({
                            bool: false,
                            mssg: "Invalid password"
                        })
                    }
                }else{
                    const token = createToken(user.user_id);
                    res.status(200).send({bool: true, id: user.user_id, cookie: token});
                }
            }else{
                res.status(400).send({
                    bool: false,
                    mssg: "Email is not registered"
                })
            }
        })
        .catch(err => {
            // console.log(err)
            res.status(400).send({
                bool: false,
                mssg: "Email is not registered"
            })
            throw err
    
        })
    } catch (error) {
        console.log(error)
    }
    
}


module.exports={
    signin_user,
    register_user
}