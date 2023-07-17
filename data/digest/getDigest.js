const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idresenha,
            idusuario,
            idlivro,
            iddesafio
         } = req.headers
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select * from ifs_tcc.tbresenha t
                join ifs_tcc.tbusuario t2 on t.idusuario = t2.idusuario
                join ifs_tcc.tblivro t3 on t.idlivro = t3.idlivro
                where ('${idresenha}' = 'null' or t.idresenha = '${idresenha}')
                and ('${idlivro}' = 'null' or t.idlivro ='${idlivro}')
                and ('${iddesafio}' = 'null' or t.iddesafio ='${iddesafio}')
                and ('${idusuario}' = 'null' or t.idusuario ='${idusuario}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}