const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type:{
        type: String,
        enum: ['Point'],
        require: true,
    },
    cordinates:{
        type:[Number],
        required: true,   
    },
})

module.exports = PointSchema;