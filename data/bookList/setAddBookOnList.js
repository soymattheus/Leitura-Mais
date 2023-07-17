const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idlivro,
            idlistalivros
        } = req.body

        const uuid = uuidv4()
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                insert into ifs_tcc.tblistalivroshaslivro (idlivro, idlistalivros)
                values ('${idlivro}', '${idlistalivros}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            client.release()
            return error
        }

    }
}