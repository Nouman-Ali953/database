const mongoose = require ('mongoose');


 const connect = mongoose.connect("mongodb://localhost:27017/Web").then(()=>{
    console.log("Database is connected...")
}).catch((e)=>{
    console.log(`Invalid Connection to Database ${e}`);

})

module.exports = connect;