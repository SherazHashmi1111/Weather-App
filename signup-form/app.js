const express = require('express');
const app = express();
app.use("/public" , express.static("public"))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , (req , res)=>{
    res.sendFile(__dirname + "/index.html")
})


app.post("/index.html" , (req ,res)=>{
    const fname = req.body.fName;
    const lname = req.body.lName;
    const email = req.body.email;
    console.log(fname + lname + email);
})




app.listen(3000,()=>{console.log("ok");})







// be5ab9c09c31aef6ec1ee7ce811d0694-us7
