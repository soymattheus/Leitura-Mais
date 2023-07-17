const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idturma
        } = req.headers
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select * from ifs_tcc.tbdesafio t
                where ('${idturma}' = 'null' or t.idturma = '${idturma}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            client.release()
            return error
        }

    }
}