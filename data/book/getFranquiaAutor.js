const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idfranquia,
            dsfranquia
        } = req.headers
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select t2.*, t3.* from ifs_tcc.tbautorhasfranquia t 
                join ifs_tcc.tbautor t2 on t.idautor = t2.idautor 
                join ifs_tcc.tbfranquia t3 on t.idfranquia = t3.idfranquia
                where ('${idfranquia}' = 'null' or t.idfranquia = '${idfranquia}')
                and ('${dsfranquia}' = 'null' or t3.dsfranquia ilike '${dsfranquia}%')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}