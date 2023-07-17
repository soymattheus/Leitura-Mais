const { v4: uuidv4 } = require('uuid');
const passwordHash = require('password-hash');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusurio,
            dssenha,
        } = req.body

        const hashedPassword = passwordHash.generate(dssenha);
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                update ifs_tcc.tbusuario
                set dssenha = '${hashedPassword}'
                where idusuario = '${idusurio}'
            `)
            client.release()

            return 'UPDATED'
        } catch (error) {
            return error
        }

    }
}