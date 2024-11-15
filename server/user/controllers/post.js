
const { 
    NeonDB 
} = require('../../db');
const { 
    express,
    path,
    fs,
    parser,
    mocha,
    morgan,
    cors,
    shortId,
    jwt,
    io,
    bcrypt
} = require('../../modules');

const maxAge = 90 * 24 * 60 * 60; 

const createToken = (id) => {
    return jwt.sign({ id }, 'user_secret', {
       expiresIn: maxAge
    });
};
async function register_user(req,res) { 

    let {fname,lname,email,phone,pwd} = req.body;
    console.log(fname,lname,email,phone,pwd);

    let date = new Date().toLocaleString();
    let hPwd = await bcrypt.hash(pwd, 10)
    let ref = `PP-${shortId.generate()}`

    async function CreateNewSeller(params) {
        return(
            NeonDB.then((pool) => 
                pool.query(`insert into paypenz_users(id,fname,lname,email,phone,pwd,ref,isActive,isVerified,isEmailVerified,isPhoneVerified,date) values(DEFAULT, '${fname}', '${lname}',  '${email}', ${phone}, '${hPwd}', '${ref}', '${false}','${false}','${false}','${false}', '${date}')`)
                .then(result => result.rowCount > 0 ?(true) : (false))
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err))
        )
    }
    
   
    async function checkEmail(params) {
        return(
            await NeonDB.then((pool) => 
                pool.query(`SELECt * FROM campus_sellers WHERE email = '${email}'`)
                .then(result => result.rows.length > 0 ? {err: 'duplicate email', bool: false} : {bool: true})
                .catch(err => (err))
            )
        )
    }

    async function checkPhone(params) {
        return(
            await NeonDB.then((pool) => 
                pool.query(`SELECt * FROM campus_sellers WHERE phone = '${phone}'`)
                .then(result => result.rows.length > 0 ? {err: 'duplicate phone', bool: false} : {bool: true})
                .catch(err => (err))
            )
        )
    }

    try{
        let email = await checkEmail(data => data)
        let phone = await checkPhone(data => data)
        new Promise((resolve, reject) => {
            

            
            console.log(email,phone)

            if(!email.bool){
                reject(email.err)
            }else if(!phone.bool){
                reject(phone.err)
            }else{
                resolve(true)
            }



        })
        // .then((result) => {
        //     // console.log('overview',result)
        //     let newSeller = CreateNewSeller()
        //     return(newSeller ? (true) : (false))
        // })
        // .then((result) => {
        //     console.log('wallet',result)
        //     let newSellerWallet = result ? CreateNewSellerWallet() : false;
        //     return(newSellerWallet ? (true) : (false))
        // })
        // .then((result) => {
        //     console.log('email',result)
        //     let newSellerEmailToken = result ? SendEmail() : false;
        //     return(newSellerEmailToken ? (true) : (false))
        // })
        
        .catch((err) => {
            res.status(500).send(err)
        })
    }catch(err){
        // console.log(err)
        res.status(500).send(err)

    }
}

async function log_user_in(req, res) {

    
    let {email,pwd} = req.body;
 
    new Promise((resolve, reject) => {
        NeonDB
        .then(async(pool) => {
                
            pool.query(`select "id" from "campus_sellers" where "email" = '${email}'`, (err, result) => {
                
                if(!err){
                    if(result.rows.length > 0){
                        const id = result.rows[0].id;
                        resolve(id)
                    }else{
                        
                        reject({Mssg: "Email is not registered..."});
                    }
                }else{
                    console.log(err)
                }
                
            })
            
        });
    })
    .then(async(id) => {
        return(
            NeonDB
            .then(async(pool) => {
                let database_return_value = await pool.query(
                    `select "seller_id","email","password","fname","lname" from  "campus_sellers" where "id" = '${id}'`
                )
                .then(result => result.rows[0])
                .catch(err => console.log(err))

                return database_return_value
            })
        )
        
    })
    .then(async(user) => { 
        if(user){
            console.log(email,pwd)
            const auth = await bcrypt.compare(pwd, user.password);
            console.log(auth)
            if (auth) {
                const token = createToken(user.seller_id);
                res.status(200).send({bool: true, id: user.seller_id, name: `${user.fname[0]}.${user.lname[0]}`});
    
            }else{
                res.status(400).send({
                    Mssg: "Invalid password"
                })
            }
        }else{
            res.status(400).send({
                Mssg: "Email is not registered"
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(400).send({
            Mssg: "Email is not registered"
        })

    })
    
}

module.exports ={
    register_user,
    log_user_in
}