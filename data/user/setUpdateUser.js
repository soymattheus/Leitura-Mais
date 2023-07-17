const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            dsnome,
            dssobrenome,
            dsemail,
            dssexo,
            dtnascimento,
            dstelefoneusuario,
            dsnomeresponsavel,
            dsemailresponsavel,
            dstelefoneresponsavel,
            dscep,
            dscidade,
            dsuf,
            dslogradouro,
            dsbairro,
            nrresidencia,
            dscomplemento,
            dslinkimg,
            blnotificacaosms,
            blnotificacaoemail,
        } = req.body
        
        try {
            const client = await pool.connect()
            const result = await client.query(`
                update ifs_tcc.tbusuario
                set dsnome = '${dsnome}',
                dssobrenome = '${dssobrenome}',
                dsemail = '${dsemail}',
                dssexo = '${dssexo}',
                dtnascimento = '${dtnascimento}',
                dstelefoneusuario = '${dstelefoneusuario}',
                dsnomeresponsavel = '${dsnomeresponsavel}',
                dsemailresponsavel = '${dsemailresponsavel}',
                dstelefoneresponsavel = '${dstelefoneresponsavel}',
                dscep = '${dscep}',
                dscidade = '${dscidade}',
                dsuf = '${dsuf}',
                dslogradouro = '${dslogradouro}',
                dsbairro = '${dsbairro}',
                nrresidencia = ${nrresidencia},
                dscomplemento = '${dscomplemento}',
                dslinkimg = '${dslinkimg}',
                blnotificacaoemail = '${blnotificacaoemail}',
                blnotificacaosms = '${blnotificacaosms}'
                where idusuario = '${idusurio}'
            `)
            client.release()

            return "UPDATED"
        } catch (error) {
            return error
        }

    }
}