var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    musicLink: String,
    sessionType: String,
    genre: String,
    refUpload: {type: String, required: false},
    comments: String
});

var Contact = mongoose.model('Contact', contactSchema);

// when we require this file, we get Pet
module.exports = Contact;