const CreateChanllege = require('../../data/chanllenge/setChanllege')
const GetChanllenge = require('../../data/chanllenge/getChanllege')

module.exports = {
    async Create(req, res, next) {
        const result = await CreateChanllege.execute(req);
        return result
    },

    async Get(req, res, next) {
        const result = await GetChanllenge.execute(req);
        return result
    }
}