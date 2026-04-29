const express = require('express')
const mongodb = require('./models/url')
const port = 4000;
const app = express()

// mongodb();

app.listen(port,()=>{
    console.log(`app is listening at ${port} port.`)
})

