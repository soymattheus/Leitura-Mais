const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const { dsTipoUsuario } = req.body
        const idTipoUsuario = uuidv4()
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                insert into ifs_tcc.tbtipousuario (idtipousuario, dstipousuario)
                values ('${idTipoUsuario}', '${dsTipoUsuario}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            client.release()
            return error
        }

    }
}