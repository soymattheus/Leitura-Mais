const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
            idusuarioseguido
        } = req.body
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbusuariohasusuario (idusuario, idusuarioseguido)
                values ('${idusuario}', '${idusuarioseguido}')
            `)
            client.release()

            return "FOLLOWING"
        } catch (error) {
            client.release()
            return error
        }

    }
}