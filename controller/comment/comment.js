const CreateComment = require('../../data/comment/setComment')
const GetComment = require('../../data/comment/getComment')

module.exports = {
    async Get(req, res, next) {
        const response = await GetComment.execute(req)
        return response
    },

    async Create(req, res, next) {
        const response = await CreateComment.execute(req)
        return response
    },
}