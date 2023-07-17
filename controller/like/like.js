const InsertLike = require('../../data/like/setLike')
const GetLike = require('../../data/like/getLike')

module.exports = {
    async Get(req, res, next) {
        const response = await GetLike.execute(req)
        return response
    },

    async Create(req, res, next) {
        const response = await InsertLike.execute(req)
        return response
    },
}