const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            dsdescricao,
            nranoletivo,
            idescola
         } = req.body
        const uuid = uuidv4()
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbturma (idturma, dsdescricao, nranoletivo, idescola)
                values ('${uuid}', '${dsdescricao}', '${nranoletivo}', '${idescola}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}