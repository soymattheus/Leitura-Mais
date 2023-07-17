const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            dtinicio,
            dtfinal,
            dsregras,
            idturma
         } = req.body
        const uuid = uuidv4()
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbdesafio (iddesafio, dtinicio, dtfinal, dsregras, idturma)
                values ('${uuid}', '${dtinicio}', '${dtfinal}', '${dsregras}', '${idturma}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}