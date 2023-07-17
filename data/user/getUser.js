const { v4: uuidv4 } = require('uuid');
const passwordHash = require('password-hash');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const {
            idusuario,
            dsnome,
            dssobrenome,
        } = req.headers
        
        const client = await pool.connect()
        try {
            const result = await client.query(`
                select t.*, t2.dstipousuario from ifs_tcc.tbusuario t
                join ifs_tcc.tbtipousuario t2 on t.idtipousuario = t2.idtipousuario 
                where ('${dsnome}' = 'null' or t.dsnome ilike '${dsnome}%')
                and ('${dssobrenome}' = 'null' or t.dssobrenome ilike '${dssobrenome}%')
                and ('${idusuario}' = 'null' or t.idusuario = '${idusuario}')
            `)
            client.release()

            var userList = []
            result.rows.map((user) => {
                userList.push({
                    idUsuario: user.idtipousuario,
                    dsNome: user.dsnome,
                    dsSobrenome: user.dssobrenome,
                    dsUsername: user.dsusername,
                    dsEmail: user.dsemail,
                    dsSexo: user.dssexo,
                    dtNascimento: user.dtnascimento,
                    dsTelefoneUsuario: user.dstelefoneusuario,
                    dsNomeResponsavel: user.dsnomeresponsavel,
                    dsEmailResponsavel: user.dsemailresponsavel,
                    dsTelefoneResponsavel: user.dstelefoneresponsavel,
                    dsCep: user.dscep,
                    dsCidade: user.dscidade,
                    dsUf: user.dsuf,
                    dsLogradouro: user.dslogradouro,
                    dsBairro: user.dsbairro,
                    nrResidencia: user.nrresidencia,
                    dsComplemento: user.dscomplemento,
                    dsLinkImg: user.dslinkimg,
                    dsTipoUsuario: user.dstipousuario,
                    blNotificacaoEmail: user.blnotificacaoemail,
                    blNotificacaoSms: user.blnotificacaosms
                })
            })

            return userList
        } catch (error) {
            client.release()
            return error
        }

    }
}