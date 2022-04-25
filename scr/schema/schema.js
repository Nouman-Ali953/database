const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    fName: String,
    lName:String,
    email:String,
    messege:String

})


const form_data = new mongoose.model("form_data",formSchema);


module.exports = form_data;
