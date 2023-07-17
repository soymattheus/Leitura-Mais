const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idresenha,
            idusuario,
            idcomentario
         } = req.body
        const uuid = uuidv4()
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbcurtida (idcurtida, idresenha, idcomentario, idusuario)
                values ('${uuid}', '${idresenha}', '${idcomentario}', '${idusuario}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}