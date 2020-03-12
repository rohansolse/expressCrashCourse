const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

var app = express()
var port = 3000

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

var people = [
    {
        name : "Rohan",
        company : "Vernost"
    },
    {
        name : "Roshan",
        company : "Business"
    }
]

app.get('/',(req,res)=>{
    // res.send("<h1>its working...</h1>")
    // res.json(people)
    res.render('index',{
        title : "cusomers",
        users : people
    })
})

app.post('/users/add',(req, res) => {
    console.log(req.body)
    res.send("Data Received..")
})

app.listen(port,()=>{
    console.log(`Server is listning at ${port}`)
})