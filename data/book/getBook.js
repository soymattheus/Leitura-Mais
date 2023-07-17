const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idlivro,
            dstitulo,
            dssubtitulo,
            isbncode,
            dsgenero,
            dseditora,
            idfranquia
        } = req.headers
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select t.*, t2.dsfranquia from ifs_tcc.tblivro t
                join ifs_tcc.tbfranquia t2 on t.idfranquia = t2.idfranquia
                where ('${idlivro}' = 'null' or t.idlivro = '${idlivro}')
                and ('${dstitulo}' = 'null' or t.dstitulo  ilike '${dstitulo}%')
                and ('${dssubtitulo}' = 'null' or t.dssubtitulo ilike '${dssubtitulo}%')
                and ('${isbncode}' = 'null' or t.isbncode = '${isbncode}')
                and ('${dsgenero}' = 'null' or t.dsgenero ilike '${dsgenero}%')
                and ('${dseditora}' = 'null' or t.dseditora ilike '${dseditora}%')
                and ('${idfranquia}' = 'null' or t.idfranquia = '${idfranquia}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            client.release()
            return error
        }

    }
}