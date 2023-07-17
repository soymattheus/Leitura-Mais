const { v4: uuidv4 } = require('uuid');
const passwordHash = require('password-hash');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            dsnome,
            dssobrenome,
            dsusername,
            dssenha,
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
            idtipousuario,
            blNotificacaoEmail,
            blNotificacaoSms
        } = req.body

        const uuid = uuidv4()
        const hashedPassword = passwordHash.generate(dssenha);
        
        const client = await pool.connect()
        try {
            const haveUser = await client.query(`
                select * from ifs_tcc.tbusuario t
                where ('${dsusername}' = 'null' or t.dsusername = '${dsusername}')
            `)

            if (haveUser.rows.length > 0) {
                return `Username '${dsusername}' already exists`
            }

            const result = await client.query(`
            insert into ifs_tcc.tbusuario (idusuario, dsnome, dssobrenome, dsusername, dssenha, dsemail, dssexo, dtnascimento, dstelefoneusuario, dsnomeresponsavel, dsemailresponsavel, dstelefoneresponsavel, dscep, dscidade, dsuf, dslogradouro, dsbairro, nrresidencia, dscomplemento, dslinkimg, idtipousuario, blNotificacaoEmail , blNotificacaoSms)
            values ('${uuid}', '${dsnome}', '${dssobrenome}', '${dsusername}', '${hashedPassword}', '${dsemail}', '${dssexo}', '${dtnascimento}', '${dstelefoneusuario}', '${dsnomeresponsavel}', '${dsemailresponsavel}', '${dstelefoneresponsavel}', '${dscep}', '${dscidade}', '${dsuf}', '${dslogradouro}', '${dsbairro}', ${nrresidencia}, '${dscomplemento}', '${dslinkimg}', '${idtipousuario}', ${blNotificacaoEmail}, ${blNotificacaoSms})
            `)

            const user = await client.query(`
                select t.idusuario from ifs_tcc.tbusuario t
                where ('${dsusername}' = 'null' or t.dsusername = '${dsusername}')
            `)
            client.release()

            return user.rows[0]
        } catch (error) {
            client.release()
            return error
        }

    }
}