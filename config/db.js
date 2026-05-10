const mongoose = require('mongoose');

const connection = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/urlshort');
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err.message)
        process.exit(1);
    }
}

module.exports = connection;
