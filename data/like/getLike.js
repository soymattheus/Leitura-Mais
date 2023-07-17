const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idresenha,
            idusuario,
            idcurtida,
            idcomentario
         } = req.headers
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select * from ifs_tcc.tbcurtida t
                join ifs_tcc.tbusuario t2 on t.idusuario = t2.idusuario
                where ('${idcurtida}' = 'null' or t.idcurtida = '${idcurtida}')
                and ('${idresenha}' = 'null' or t.idresenha = '${idresenha}')
                and ('${idcomentario}' = 'null' or t.idcomentario = '${idcomentario}')
                and ('${idusuario}' = 'null' or t.idusuario = '${idusuario}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}