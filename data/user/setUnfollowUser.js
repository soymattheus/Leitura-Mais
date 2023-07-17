const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
            idusuarioseguindo
        } = req.body
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                delete from ifs_tcc.tbusuariohasusuario
                where idusuario = '${idusuario}'
                and idusuarioseguido = '${idusuarioseguindo}'
            `)
            client.release()

            return "UNFOLLOWED"
        } catch (error) {
            client.release()
            return error
        }

    }
}