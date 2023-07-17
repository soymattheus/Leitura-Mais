const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idtipousuario,
        } = req.headers
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select * from ifs_tcc.tbtipousuario t
                where ('${idtipousuario}' = 'null' or t.idtipousuario = '${idtipousuario}')
            `)
            client.release()
            
            
            let retorno = []
            result.rows.map((data) => {
                retorno.push({
                    idTipoUsuario: data.idtipousuario,
                    dsTipoUsuario: data.dstipousuario
                })
            })

            return retorno
        } catch (error) {
            client.release()
            return error
        }

    }
}