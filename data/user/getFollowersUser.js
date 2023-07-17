const { v4: uuidv4 } = require('uuid');
const passwordHash = require('password-hash');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
        } = req.headers
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                select t2.idusuario, t2.dsnome, t2.dssobrenome from ifs_tcc.tbusuariohasusuario t
                join ifs_tcc.tbusuario t2 on t.idusuarioseguido = t2.idusuario
                where ('${idusuario}' = 'null' or t.idusuarioseguido = '${idusuario}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            client.release()
            return error
        }

    }
}