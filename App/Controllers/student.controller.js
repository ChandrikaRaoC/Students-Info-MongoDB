const StudentInfo = require('../Models/student.model.js')

exports.create = function(req, res){

    if(!req.body.name || !req.body.english || !req.body.maths || !req.body.science) {
        res.json({code: 401, message: "Failed to create studentInfo. some fields are missing."})
    }
    else {
        const info = new StudentInfo({name: req.body.name, maths: req.body.maths, science: req.body.science, english: req.body.english})
        info.save(function(error, data) {
            if(error) {
                console.log(error);
                res.send({code: 500, message: "Some error ocuured while creating the studentInfo."})
            } else {
                res.json({code: 200, studentInfo:data})
            }
        })
    }
}

exports.update = function(req, res) {

    if(!req.body.name || !req.body.english || !req.body.maths || !req.body.science) {
        res.json({code: 401, message: "Failed to update studentInfo. some fields are missing."})
    }

    StudentInfo.findById(req.params.studentId, function(error, info) {
        if(error) {
            res.send({code: 500, message: "Could not find a studentInfo with id " + req.params.studentId})
        }
        else{
            info.name = req.body.name
            info.maths = req.body.maths
            info.science = req.body.science
            info.english = req.body.english

            info.save(function(error, data){
                if(error) {
                    res.send({code: 500, message: "Could not update studentInfo with id " + req.params.studentId})
                } else {
                    res.json({code: 200, studentInfo: data})
                }
            })
        }
    })
}

exports.delete = function(req, res){

    StudentInfo.remove({_id: req.params.studentId}, function(error, info){
        if(error) {
            res.send({code: 500, message: "Could not delete studentInfo with id " + req.params.studentId});
        } else {
            res.send({code: 200, message: "StudentInfo deleted successfully!"})
        }
    })
}

exports.fetch = function(req, res) {

    StudentInfo.findById(req.params.studentId, function(error, info) {
        if(error) {
            res.send({code: 500, message: "Could not find a studentInfo with id " + req.params.studentId})
        }
        else{
            res.json({code: 200, studentInfo: info})
        }
    })
}

exports.fetchAll = function(req, res){

    StudentInfo.find(function(error, info) {
        if(error) {
            res.send({code: 500, message: "Some error occured while fetching student's info."})
        }
        else{
            res.json({code: 200, studentInfo: info})
        }
    })
}