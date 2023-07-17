const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idcomentario,
            idusuario,
            idlivro
         } = req.headers
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select t.*, t2.dsnome as nomeusuario, t2.dssobrenome as sobrenomeusuario from ifs_tcc.tbcomentario t
                join ifs_tcc.tbusuario t2 on t.idusuario = t2.idusuario
                where ('${idcomentario}' = 'null' or t.idcomentario = '${idcomentario}')
                and ('${idusuario}' = 'null' or t.idusuario = '${idusuario}')
                and ('${idlivro}' = 'null' or t.idlivro = '${idlivro}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}