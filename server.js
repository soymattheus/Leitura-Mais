const http = require('http')

const app = require('./index')
const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(process.env.PORT || 3000, () => {
    console.log("API inciada na porta:", port)
})