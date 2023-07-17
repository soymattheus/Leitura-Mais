const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            dsnome,
            dsdescricao,
            blprivacidade,
            dstipolista,
            idusuario,
            idturma
        } = req.body

        const uuid = uuidv4()
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                insert into ifs_tcc.tblistalivros
                (idlistalivros, dsnome, dsdescricao, blprivacidade, dstipolista, idusuario, idturma)
                values ('${uuid}', '${dsnome}', '${dsdescricao}', '${blprivacidade}', '${dstipolista}', '${idusuario}', '${idturma}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            client.release()
            return error
        }

    }
}