const router = require('express').Router();

const UserTpe = require('../../controller/userType/userType')

router.get('/query', async (req, res, next) => {
    const auth = await UserTpe.index(req)
    res.status(200).send(auth)
})

router.post('/insert', async (req, res, next) => {
    const auth = await UserTpe.create(req)
    res.status(200).send(auth)
})
  
module.exports = router