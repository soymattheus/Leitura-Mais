const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            dscomentario,
            idusuario,
            idresenha,
            idlivro
         } = req.body
        const uuid = uuidv4()
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbcomentario t (idcomentario, dscomentario, dtocorrencia, idusuario, idresenha, idlivro)
                values ('${uuid}', '${dscomentario}', now(), '${idusuario}', '${idresenha}', '${idlivro}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}