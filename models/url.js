
const {schema,model, Schema} = require('mongoose')


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