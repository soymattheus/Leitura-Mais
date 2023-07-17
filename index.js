require('dotenv').config()
const express = require('express')
const cors = require('cors')
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const Auth = require('./routes/auth/auth')
const books = require('./routes/book/routeBook')
const UserType = require('./routes/userType/userType')
const User = require('./routes/user/user')
const BookList = require('./routes/bookList/routeBookList')
const School = require('./routes/school/school')
const Chanllenge = require('./routes/chanllege/chanllege')
const Comment = require('./routes/comment/routeComment')
const Digest = require('./routes/digest/routeDigest')
const Like = require('./routes/like/routeLike')

app.use(bodyParser.json())
app.use(logger('dev'));
app.use(cors())

app.use('/auth', Auth)
app.get('/auth/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

app.use('/book', books)
app.use('/user-type', UserType)
app.use('/user', User)
app.use('/book-list', BookList)
app.use('/school', School)
app.use('/chanllege', Chanllenge)
app.use('/comment', Comment)
app.use('/digest', Digest)
app.use('/like', Like)

app.use((req, res, next) => {
  const erro = new Error("Route not found")
  erro.status = 404
  next(erro)
})

app.use((req, res, mext) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      message: error.message
    }
  })
})

function verifyJWT(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

module.exports = app