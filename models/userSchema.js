const mongoose = require ('mongoose');



const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true 
    },
    
    age : {
        type : Number ,
        required : true 
    },

    email : String ,

    PhoneNumber : {
        type : Number,
        require : true
    }
})

const user = mongoose.model ('user', userSchema )
module.exports= user;
