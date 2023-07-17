const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
            idescola
         } = req.headers
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select t.*, t2.dsnome as nomeUsuario, t2.dssobrenome as sobrenomeUsuario, t3.dsnome as esescola, t3.dsunidade as dsunidade, t3.dslinkimg as dslinkimg
                from ifs_tcc.tbusuariohasescola t
                join ifs_tcc.tbusuario t2 on t.idusuario = t2.idusuario
                join ifs_tcc.tbescola t3 on t.idescola = t3.idescola
                where ('${idusuario}' = 'null' or t.idusuario = '${idusuario}')
                and ('${idescola}' = 'null' or t.idescola = '${idescola}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}