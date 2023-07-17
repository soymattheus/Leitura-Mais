const jwt = require('jsonwebtoken');
const Auth = require('../../data/auth/auth')
const PasswordRecover = require('../../data/auth/passwordRecover')
const GetBookList = require('../../data/bookList/getBookList')

module.exports = {
    async Login(req, res, next) {
        const response = await Auth.execute(req)

        if(response.auth){
            const id = 1; //esse id viria do banco de dados
            var token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 3000 // expires in 5min
            });
            
            const bookLists = await GetBookList.execute({
              headers: {
                idusuario: response.dadosPessoais.idUsuario,
                idturma: "null"
              }
            })

            return { auth: true, token: token, dados: response, listaLivros: bookLists };
          }
          
          return { auth: false, msg: response.msg };
    },

    async PasswordRecover(req, res, next) {
      const response = await PasswordRecover.execute(req)
      return response
    }
}