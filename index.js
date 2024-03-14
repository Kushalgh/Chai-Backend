require('dotenv').config();
const express = require('express')

const app = express()
//const port = 3000

app.get('/',(req,res) =>{
    res.send('Hello World !')
})

app.get('/login',(req,res)=>{
    res.send(`<h1>Please Login Here</h1>`)
})


const PORT = process.env.PORT || 3000

app.listen(PORT,() =>{
    console.log(`Server is listening at ${PORT}`)
})