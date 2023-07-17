const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
            idturma
        } = req.headers
        console.log(idusuario)
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                select * from ifs_tcc.tblistalivros t
                where ('${idusuario}' = 'null' or t.idusuario = '${idusuario}')
                and ('${idturma}' = 'null' or t.idturma = '${idturma}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            client.release()
            return error
        }

    }
}