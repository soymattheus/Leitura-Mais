const CreateBookList = require('../../data/bookList/setBookList')
const GetBookList = require('../../data/bookList/getBookList')
const AddBookOnList = require('../../data/bookList/setAddBookOnList')
const GetBookOfList = require('../../data/bookList/getBookOfList')

module.exports = {
    async Create(req, res, next) {
        const response = await CreateBookList.execute(req)
        return response
    },
    async Get(req, res, next) {
        const response = await GetBookList.execute(req)
        return response
    },
    async AddBookOnList(req, res, next) {
        const response = await AddBookOnList.execute(req)
        return response
    },
    async GetBookOfList(req, res, next) {
        const response = await GetBookOfList.execute(req)
        return response
    }
}