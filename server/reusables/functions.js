const { neon_db } = require("./db");
// const { console.log } = require("./console.log");

async function IS_EXISTING(table,column,column_value) {
    return(
        await neon_db().then((pool) => 
            pool.query(`
                SELECT COUNT (*) AS COUNT
                FROM ${table} 
                WHERE ${column} = '${column_value}'
            `)
            .then((result) => parseInt(result.rows[0].count, 10) > 0 ? true : false)
        ).catch(err => console.log(err))
    )
}

async function DELETE_ROW_AFTER_ERR(table,column,colum_name) {
    neon_db()
    .then((pool) => {
        pool.query(`
            DELETE FROM ${table}
            WHERE ${colum_name} = '${column}';
        `)
        .then((result) => {
            console.log(result)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

async function GET_LANG(req,res) {
    return(
        await neon_db()
        .then((pool) => {
            pool.query(`
                SELECT * FROM languages
            `)
            .then((result) => res.status(200).send({bool: true, data:result.rows}))
            .catch(err => res.status(400).send({bool: false, data:''}))
        })
        .catch((err) => {
            
            console.log(err)
            res.status(400).send({bool: false, data:''})
        })
    )
}

async function GET_TIMEZONES(req,res) {
    return(
        await neon_db()
        .then((pool) => {
            pool.query(`
                SELECT * FROM timezones
            `)
            .then((result) => res.status(200).send({bool: true, data:result.rows}))
            .catch(err => res.status(400).send({bool: false, data:''}))
        })
        .catch((err) => {
            
            console.log(err)
            res.status(400).send({bool: false, data:''})
        })
    )
}



module.exports={
    IS_EXISTING, 
    DELETE_ROW_AFTER_ERR,
    GET_LANG,
    GET_TIMEZONES
}