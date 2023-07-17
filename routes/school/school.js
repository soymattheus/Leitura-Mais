const router = require('express').Router();
const School = require('../../controller/school/school')

router.post('/insert', async (req, res, next) => {
    const createResponse = await School.CreateSchool(req)
    res.status(200).send(createResponse)
})

router.get('/query-school', async (req, res, next) => {
    const school = await School.GetSchool(req)
    res.status(200).send(school)
})

router.get('/query-class', async (req, res, next) => {
    const school = await School.GetClass(req)
    res.status(200).send(school)
})
  
router.post('/insert-class', async (req, res, next) => {
    const school = await School.CreateClass(req)
    res.status(200).send(school)
})

router.post('/insert-student-class', async (req, res, next) => {
    const school = await School.AddStudentToClass(req)
    res.status(200).send(school)
})

router.get('/query-student-class', async (req, res, next) => {
    const school = await School.GetStudentByClass(req)
    res.status(200).send(school)
})

router.post('/insert-student-school', async (req, res, next) => {
    const school = await School.AddSchoolStudents(req)
    res.status(200).send(school)
})

router.get('/query-student-school', async (req, res, next) => {
    const school = await School.GetStudentsBySchool(req)
    res.status(200).send(school)
})

module.exports = router