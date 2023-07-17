const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idlistalivros
        } = req.headers
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                select t2.* from ifs_tcc.tblistalivroshaslivro t
                join ifs_tcc.tblivro t2 on t.idlivro = t2.idlivro
                where ('${idlistalivros}' = 'null' or t.idlistalivros = '${idlistalivros}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            client.release()
            return error
        }

    }
}