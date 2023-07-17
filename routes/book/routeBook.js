const router = require('express').Router();

const Books = require('../../controller/book/controllerBook')

router.get('/query-book', async (req, res, next) => {
    const book = await Books.Get(req)
    res.status(200).send(book)
})

router.post('/insert-book', async (req, res, next) => {
    const book = await Books.Create(req)
    res.status(200).send(book)
})
  
router.get('/query-franquia', async (req, res, next) => {
    const book = await Books.GetFranquia(req)
    res.status(200).send(book)
})

router.post('/insert-franquia', async (req, res, next) => {
    const book = await Books.CreateFranquia(req)
    res.status(200).send(book)
})

router.post('/insert-franquia-autor', async (req, res, next) => {
    const book = await Books.AddFranquiaAutor(req)
    res.status(200).send(book)
})

router.get('/query-franquia-autor', async (req, res, next) => {
    const book = await Books.GetFranquiaAutor(req)
    res.status(200).send(book)
})

router.get('/query-book-autor', async (req, res, next) => {
    const book = await Books.GetBookAutor(req)
    res.status(200).send(book)
})

router.post('/insert-book-autor', async (req, res, next) => {
    const book = await Books.AddBookAutor(req)
    res.status(200).send(book)
})

module.exports = router