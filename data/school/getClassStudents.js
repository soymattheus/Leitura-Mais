const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
            idturma
         } = req.headers
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select t.*, t2.dsnome as nomeUsuario, t2.dssobrenome as sobrenomeUsuario, t3.dsdescricao as dsTurma, t3.nranoletivo as dsAnoLetivo, t3.idescola as idEscola
                from ifs_tcc.tbusuariohasturma t
                join ifs_tcc.tbusuario t2 on t.idusuario = t2.idusuario
                join ifs_tcc.tbturma t3 on t.idturma = t3.idturma
                where ('${idusuario}' = 'null' or t.idusuario = '${idusuario}')
                and ('${idturma}' = 'null' or t.idturma = '${idturma}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}