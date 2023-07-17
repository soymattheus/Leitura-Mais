const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idescola,
            dsnome
         } = req.headers
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                select * from ifs_tcc.tbescola t
                where ('${idescola}' = 'null' or t.idescola = '${idescola}')
                and ('${dsnome}' = 'null' or t.dsnome ilike '${dsnome}%')
            `)
            client.release()

            return result.rows
        } catch (error) {
            return error
        }

    }
}