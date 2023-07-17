const GetBook = require('../../data/book/getBook')
const CreateBook = require('../../data/book/setBook')
const GetFranquia = require('../../data/book/getFranquia')
const CreateFranquia = require('../../data/book/setFranquia')
const AddFranquiaAutor = require('../../data/book/setFranquiaAutor')
const GetFranquiaAutor = require('../../data/book/getFranquiaAutor')
const GetBookAutor = require('../../data/book/getBookAutor')
const AddBookAutor = require('../../data/book/setBookAutor')

module.exports = {
    async Get(req, res, next) {
        const response = await GetBook.execute(req)
        return response
    },

    async Create(req, res, next) {
        const response = await CreateBook.execute(req)
        return response
    },

    async GetFranquia(req, res, next) {
        const response = await GetFranquia.execute(req)
        return response
    },

    async CreateFranquia(req, res, next) {
        const response = await CreateFranquia.execute(req)
        return response
    },

    async AddFranquiaAutor(req, res, next) {
        const response = await AddFranquiaAutor.execute(req)
        return response
    },

    async GetFranquiaAutor(req, res, next) {
        const response = await GetFranquiaAutor.execute(req)
        return response
    },

    async GetBookAutor(req, res, next) {
        const response = await GetBookAutor.execute(req)
        return response
    },

    async AddBookAutor(req, res, next) {
        const response = await AddBookAutor.execute(req)
        return response
    },
}