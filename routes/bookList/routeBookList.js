const router = require('express').Router();
const BookList = require('../../controller/bookList/controllerBookList')

router.post('/create', async (req, res, next) => {
    const createResponse = await BookList.Create(req)
    res.status(200).send(createResponse)
})

router.get('/query', async (req, res, next) => {
    const createResponse = await BookList.Get(req)
    res.status(200).send(createResponse)
})

router.get('/query-book-of-list', async (req, res, next) => {
    const createResponse = await BookList.GetBookOfList(req)
    res.status(200).send(createResponse)
})

router.post('/insert-book-on-list', async (req, res, next) => {
    const createResponse = await BookList.Get(req)
    res.status(200).send(createResponse)
})
  
module.exports = router