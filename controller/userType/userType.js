const UserType = require('../../data/userType/getUserType')
const CreateUserType = require('../../data/userType/setUserType')

module.exports = {
    async index(req, res, next) {
        const result = await UserType.execute(req);
        return result
    },

    async create(req, res, next) {
        const result = await CreateUserType.execute(req);
        return result
    }
}