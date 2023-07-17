const CreateSchool = require('../../data/school/setSchool')
const GetSchool = require('../../data/school/getSchool')
const GetClass = require('../../data/school/getClass')
const CreateClass = require('../../data/school/setSchoolClass')
const AddClassStandent = require('../../data/school/setClassStudents')
const GetClassStudents = require('../../data/school/getClassStudents')
const AddSchoolStudents = require('../../data/school/setSchoolStudents')
const GetSchoolStudents = require('../../data/school/getschoolStudents')

module.exports = {
    async CreateSchool(req, res, next) {
        const result = await CreateSchool.execute(req);
        return result
    },

    async GetSchool(req, res, next) {
        const result = await GetSchool.execute(req);
        return result
    },

    async GetClass(req, res, next) {
        const result = await GetClass.execute(req);
        return result
    },

    async CreateClass(req, res, next) {
        const result = await CreateClass.execute(req);
        return result
    },

    async AddStudentToClass(req, res, next) {
        const result = await AddClassStandent.execute(req);
        return result
    },

    async GetStudentByClass(req, res, next) {
        const result = await GetClassStudents.execute(req);
        return result
    },

    async AddSchoolStudents(req, res, next) {
        const result = await AddSchoolStudents.execute(req);
        return result
    },

    async GetStudentsBySchool(req, res, next) {
        const result = await GetSchoolStudents.execute(req);
        return result
    }
}