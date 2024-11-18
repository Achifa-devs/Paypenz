const { neon_db } = require("../../reusables/db");



async function get_user(req,res) {

    let {
        user_id
    } = req.query;


    neon_db().then((pool) => {
        pool.query(`
            SELECT * FROM "users" WHERE user_id = '${user_id}'
        `)
        .then((result) => {
            // const token = createToken(user_id);
            res.status(200).send({bool: true, data: result.rows}) 
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({bool: false, err: ''})
        })
    
    }).catch(err => console.log(err))


}



module.exports ={
    get_user
}