const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idescola,
            idusuario
         } = req.body
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbusuariohasescola (idescola, idusuario)
                values ('${idescola}', '${idusuario}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}