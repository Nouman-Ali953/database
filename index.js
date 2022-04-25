const path = require('path');  // this is used to specify the path i.e used to specify the static path or the path of the modules which is going to be export

const express = require('express');

const app = express();

const mongoose = require('mongoose');

const DB = "mongodb+srv://Nouman:ArfaCareem123@newathome.88tuh.mongodb.net/next?retryWrites=true&w=majority";
mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("connection successful yes");
}).catch((err)=>{
  console.log(err);

});


const connect = require("../scr/db/connect");

const form_data = require("../scr/schema/schema")

const port = 8000 || process.env.Port;

const staticPath = path.join(__dirname,'../../MongoDB');

app.use(express.urlencoded({extended:false})); // this line is used because it doesnot get the data from the form


app.use(express.static(staticPath));

app.post('', async(req,res)=>{
    try{
      const schema = new form_data({
              fName:req.body.fName,
              lName:req.body.lName,
              email:req.body.email,
              messege:req.body.messege
            });
              
              const registered = await schema.save();
      
              console.log("Data Got");
      
            
          }catch(e){
            console.log(e);
          
          }
  
  })

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})

app.get('/',(req,res)=>{
    res.send("index.html");

})


