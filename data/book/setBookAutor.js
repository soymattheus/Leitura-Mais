const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idlivro,
            idautor
        } = req.body
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tblivrohasautor (idlivro, idautor)
                values ('${idlivro}', '${idautor}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}