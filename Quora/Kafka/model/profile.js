var mongoose = require('mongoose');
const db = require("../app/dbconn")


var profileSchema = mongoose.Schema({
firstname: {
    type: String
},
lastname: {
    type: String
},
email: {
    type: String
},
city: {
    type: String
},
state: {
    type: String
},
zipcode: {
    type: String
},
education: {
    type: String
},
career: {
    type: String
},
aboutme: {
    type: String
},
credentials: {
    type: String
},
photo: {
    type: String
},
followers : [String],
following : [String],
topicsFollowed : Array,
questionsFollowed : Array
});

Profile = module.exports = mongoose.model('profile',profileSchema);

module.exports = Profile;