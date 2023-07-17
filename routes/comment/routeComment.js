const router = require('express').Router();
const Comment = require('../../controller/comment/comment')

router.post('/insert-comment', async (req, res, next) => {
    const responseCreate = await Comment.Create(req)
    res.status(200).send(responseCreate)
})

router.get('/query-comment', async (req, res, next) => {
    const comment = await Comment.Get(req)
    res.status(200).send(comment)
})

module.exports = router