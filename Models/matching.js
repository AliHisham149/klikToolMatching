const mongoose = require ('mongoose');
const Schema = mongoose.Schema
const matchingSchema = new Schema({
    Data:{
        type:String,
        required: true
    },
    redditName:{
        type:String,
        required:true
    }
})

const matching = mongoose.model('matching',matchingSchema);
module.exports  = matching;