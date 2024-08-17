const mongoose = require('mongoose');

const tasksSchema = new Schema({
   title : {
    type : String,
    required : true
   },
   description : {
    type : String,
    required : true
   },

   status : {
    type : String,
    type : required,
   },

   dueDate : {
    type  :Date,
    required : true,
   }, 

});

module.exports = mongoose.model('tsks',tasksSchema);