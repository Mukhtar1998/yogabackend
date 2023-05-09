const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String, 
        trim:true
    },
    lastName:{
        type:String, 
        trim:true
    },
    email:{
        type:String, 
        required:true, 
        lowercase:true,
        unique:true
    },
    password:{
        type:String, 
        required:true
    },
}, {
    timestamps: true
    })

    let User = module.exports = mongoose.model("users", userSchema);
// const User= mongoose.model('User',userSchema);
// module.exports = User;

