const { v4: uuidv4 } = require('uuid');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            dsnome,
            dsunidade,
            dslinkimg
         } = req.body
        const uuid = uuidv4()
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                insert into ifs_tcc.tbescola (idescola, dsnome, dsunidade, dslinkimg)
                values ('${uuid}', '${dsnome}', '${dsunidade}', '${dslinkimg}')
            `)
            client.release()

            return "CREATED"
        } catch (error) {
            return error
        }

    }
}