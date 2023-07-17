const router = require('express').Router();
const Digest = require('../../controller/digest/digest')

router.post('/insert-digest', async (req, res, next) => {
    const responseCreate = await Digest.Create(req)
    res.status(200).send(responseCreate)
})

router.get('/query-digest', async (req, res, next) => {
    const comment = await Digest.Get(req)
    res.status(200).send(comment)
})

module.exports = router