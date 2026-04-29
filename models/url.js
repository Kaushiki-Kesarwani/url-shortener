// const mongoose = require('mongoose');
const {schema,model, Schema} = require('mongoose')

// const connection = async()=>{
//     try{
//         const conn = await mongoose.connect('mongodb://127.0.0.1:27017/');
//         console.log(`MongoDB Connected: ${conn.connection.host}`)
//     }catch(err){
//         console.log(err.message)
//         process.exit(1);
//     }
// }

// module.exports = connection;

const myschema = new Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
      type:String,
    required:true,  
    },
    visitHistory:[{timestamp:{type:Number}}],
},{timestamps:true}
);

const url = model("url",myschema);

module.exports = url;