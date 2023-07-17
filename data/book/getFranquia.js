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
                select t.dsfranquia, t2.* from ifs_tcc.tbfranquia t
                join ifs_tcc.tblivro t2 on t.idfranquia = t2.idfranquia
                where ('${idfranquia}' = 'null' or t.idfranquia = '${idfranquia}')
                and ('${dsfranquia}' = 'null' or t.dsfranquia ilike '${dsfranquia}%')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}