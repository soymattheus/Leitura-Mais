const { v4: uuidv4 } = require('uuid');
const passwordHash = require('password-hash');
const pool = require('../../dbConnection').pool

module.exports = {
    async execute(req) {
        const { userName, password } = req.body

        try {
            const client = await pool.connect()
            const result = await client.query(`
                select t.*, t2.dstipousuario from ifs_tcc.tbusuario t
                join ifs_tcc.tbtipousuario t2 on t.idtipousuario = t2.idtipousuario 
                where ('${userName}' = 'null' or t.dsusername ilike '${userName}')
            `)
            client.release()

            const rowResult = result.rows

            if (rowResult.length === 0) {
                return {
                    auth: false,
                    msg: "User not found"
                }
            } else {
                const hashedPassword = rowResult[0].dssenha
                const isPasswordValid = passwordHash.verify(password, hashedPassword)
                
                if (userName === rowResult[0].dsusername && isPasswordValid) { 
                    var userList = []
                    result.rows.map((user) => {
                        userList.push({
                            auth: true,
                            idTipoUsuario: user.idtipousuario,
                            dsTipoUsuario: user.dstipousuario,
                            dadosPessoais: {
                                idUsuario: user.idusuario,
                                dsNome: user.dsnome,
                                dsSobrenome: user.dssobrenome,
                                dsUsername: user.dsusername,
                                dsEmail: user.dsemail,
                                dsSexo: user.dssexo,
                                dtNascimento: user.dtnascimento,
                                dsTelefoneUsuario: user.dstelefoneusuario,
                                dsLinkImg: user.dslinkimg,
                            },
                            dadosEndereco: {
                                dsCep: user.dscep,
                                dsCidade: user.dscidade,
                                dsUf: user.dsuf,
                                dsLogradouro: user.dslogradouro,
                                dsBairro: user.dsbairro,
                                nrResidencia: user.nrresidencia,
                                dsComplemento: user.dscomplemento,
                            },
                            dadosResponsavelLegal: {
                                dsNomeResponsavel: user.dsnomeresponsavel,
                                dsEmailResponsavel: user.dsemailresponsavel,
                                dsTelefoneResponsavel: user.dstelefoneresponsavel,
                            },
                            dadosPreferenciaApp: {
                                blNotificacaoEmail: user.blnotificacaoemail,
                                blNotificacaoSms: user.blnotificacaosms
                            }
                        })
                    })
                    return userList[0]
                }
            }

            return {auth: false}
        } catch (error) {
            throw new Error(error)
        }
    }
}