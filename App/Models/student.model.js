const mongoose = require('mongoose')

const StudentInfoSchema = mongoose.Schema({
    name: String,
    maths: Number,
    science: Number,
    english: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('StudentInfo', StudentInfoSchema)