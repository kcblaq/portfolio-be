const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
    
    
    industry:{
        type:String, 
        required : true
    },
    link:{
        type:String,
        required : true
    },
    description:{ 
        type:String, 
        required : true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    t1: String,
    t2: String,
    t3: String,
    t4: String,
})

module.exports = mongoose.model("works", WorkSchema)