const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idescola,
            idturma
         } = req.headers
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select * from ifs_tcc.tbturma t
                where ('${idescola}' = 'null' or t.idescola = '${idescola}')
                and ('${idturma}' = 'null' or t.idturma = '${idturma}')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}