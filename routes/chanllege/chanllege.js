const router = require('express').Router();
const Chanllenge = require('../../controller/chanllege/chanllege')

router.post('/insert', async (req, res, next) => {
    const auth = await Chanllenge.Create(req)
    res.status(200).send(auth)
})

router.get('/query', async (req, res, next) => {
    const auth = await Chanllenge.Get(req)
    res.status(200).send(auth)
})

module.exports = router