const CreateUser = require('../../data/user/setUser')
const GetUser = require('../../data/user/getUser')
const CreateBookList = require('../bookList/controllerBookList')
const GetFolowers = require('../../data/user/getFollowersUser')
const GetFollowing = require('../../data/user/getFollowingUser')
const SetFollowUser = require('../../data/user/setFollowUser')
const SetUnfollowUser = require('../../data/user/setUnfollowUser')
const SetUpdateUser = require('../../data/user/setUpdateUser')

module.exports = {
    async Create(req, res, next) {
        const result = await CreateUser.execute(req);

        await CreateBookList.Create({
            body: {
                "dsnome": "Livros",
                "dsdescricao": "Todos os livros do usuário",
                "blprivacidade": 0,
                "dstipolista": "user",
                "idusuario": result.idusuario,
                "idturma": "null"
            }
        })

        await CreateBookList.Create({
            body: {
                "dsnome": "Trocar",
                "dsdescricao": "Disponíveis para troca",
                "blprivacidade": 0,
                "dstipolista": "user",
                "idusuario": result.idusuario,
                "idturma": "null"
            }
        })

        await CreateBookList.Create({
            body: {
                "dsnome": "Doar",
                "dsdescricao": "Disponíveis para doação",
                "blprivacidade": 0,
                "dstipolista": "user",
                "idusuario": result.idusuario,
                "idturma": "null"
            }
        })

        return result
    },

    async Get(req, res, next) {
        const result = await GetUser.execute(req);
        return result
    },

    async GetFolowers(req, res, next) {
        const result = await GetFolowers.execute(req);
        return result
    },

    async GetFollowing(req, res, next) {
        const result = await GetFollowing.execute(req);
        return result
    },

    async SetFollowUser(req, res, next) {
        const result = await SetFollowUser.execute(req);
        return result
    },

    async SetUnfollowUser(req, res, next) {
        const result = await SetUnfollowUser.execute(req);
        return result
    },

    async SetUpdateUser(req, res, next) {
        const result = await SetUpdateUser.execute(req);
        return result
    },
}