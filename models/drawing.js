var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drawingSchema = new Schema({
    title: String,
    image: String,
    randomNumber: Number
});


module.exports = mongoose.model('drawing', drawingSchema);