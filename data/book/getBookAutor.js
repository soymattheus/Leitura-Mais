const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idautor,
            dsautor
        } = req.headers
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select t2.dsnome as nomeautor, t2.nravaliacao as avaliacaoautor, t3.* from ifs_tcc.tblivrohasautor t
                join ifs_tcc.tbautor t2 on t.idautor = t2.idautor
                join ifs_tcc.tblivro t3 on t.idlivro = t3.idlivro
                where ('${idautor}' = 'null' or t.idautor = '${idautor}')
                and ('${dsautor}' = 'null' or t2.dsnome ilike '${dsautor}%')
            `)
            client.release()

            return result.rows
        } catch (error) {
            client.release()
            return error
        }

    }
}