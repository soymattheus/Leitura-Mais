const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
            idturma
         } = req.body
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbusuariohasturma (idusuario, idturma)
                values ('${idusuario}', '${idturma}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}