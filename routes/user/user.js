const router = require('express').Router();

const User = require('../../controller/user/user')

router.post('/insert', async (req, res, next) => {
    const creteReturn = await User.Create(req)
    res.status(200).send(creteReturn)
})

router.get('/query', async (req, res, next) => {
    const creteReturn = await User.Get(req)
    res.status(200).send(creteReturn)
})

router.get('/query-followers', async (req, res, next) => {
    const creteReturn = await User.GetFolowers(req)
    res.status(200).send(creteReturn)
})

router.get('/query-following', async (req, res, next) => {
    const creteReturn = await User.GetFollowing(req)
    res.status(200).send(creteReturn)
})

router.post('/follow-user', async (req, res, next) => {
    const creteReturn = await User.SetFollowUser(req)
    res.status(200).send(creteReturn)
})

router.post('/unfollow-user', async (req, res, next) => {
    const creteReturn = await User.SetUnfollowUser(req)
    res.status(200).send(creteReturn)
})

router.post('/update-user', async (req, res, next) => {
    const creteReturn = await User.SetUpdateUser(req)
    res.status(200).send(creteReturn)
})
  
module.exports = router