const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use('/public', express.static('public'))
const https = require('https')
app.use(bodyParser.urlencoded({extended:true}));



app.get("/" , (req , res)=>{

    res.sendFile(__dirname+"/index.html")

})

app.post("/" , (req , res )=>{



    const cityName = req.body.city
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=300e7fc2c61139df3f426b4b5d0bf405&units=metric&q="+cityName+""
    https.get(url , (response)=>{
        console.log(response.statusCode);
        response.on("data" , (data)=>{
            const weather = JSON.parse(data);
            const city = weather.name
            const temp = weather.main.temp;
            const disc = weather.weather[0].description
            res.write("Temprature of "+city+" is "+temp+" centi grade celcius and weather is "+disc+"")
            res.send();
        })
    })
})


















app.listen(3000 , ()=>{
    console.log("All is connected");
})