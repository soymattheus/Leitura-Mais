const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const { idautor, idfranquia } = req.body
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                insert into ifs_tcc.tbautorhasfranquia (idautor, idfranquia)
                values ('${idautor}', '${idfranquia}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            client.release()
            return error
        }

    }
}