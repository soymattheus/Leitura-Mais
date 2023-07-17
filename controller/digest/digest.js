const CreateDigest = require('../../data/digest/setDigest')
const GetDisgest = require('../../data/digest/getDigest')

module.exports = {
    async Get(req, res, next) {
        const response = await GetDisgest.execute(req)
        return response
    },

    async Create(req, res, next) {
        const response = await CreateDigest.execute(req)
        return response
    },
}