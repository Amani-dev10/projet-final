const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    email: String,
    phone: String,
    adresse: String,
    password: String,
    registerDate:{
        type:Date,
        default: Date.now,
    },
    userRole:{
        type:String,
        default: 'User',
        roles:['User','Admin'],
    },
});
module.exports = mongoose.model('User',userSchema);