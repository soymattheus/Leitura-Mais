const router = require('express').Router();
const Like = require('../../controller/like/like')

router.post('/insert-like', async (req, res, next) => {
    const responseCreate = await Like.Create(req)
    res.status(200).send(responseCreate)
})

router.get('/query-like', async (req, res, next) => {
    const comment = await Like.Get(req)
    res.status(200).send(comment)
})

module.exports = router