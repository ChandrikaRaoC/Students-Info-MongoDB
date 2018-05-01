module.exports = function(app) {
    const studentsInfo = require('../Controllers/student.controller.js')

    app.post('/createStudent', studentsInfo.create)

    app.put('/updateStudent/:studentId', studentsInfo.update)

    app.get('/fetchStudents', studentsInfo.fetchAll)

    app.get('/getStudent/:studentId', studentsInfo.fetch)

    app.delete('/deleteStudent/:studentId', studentsInfo.delete)
}