const router = require('express').Router();

const Auth = require('../../controller/auth/auth')

router.post('/login', async (req, res, next) => {
    const auth = await Auth.Login(req)
    res.status(200).send(auth)
})

router.post('/password-recover', async (req, res, next) => {
    const auth = await Auth.PasswordRecover(req)
    res.status(200).send(auth)
})
  
module.exports = router