const mongoose = require("mongoose")


const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reequired: true
    }, age: {
        type: Number,
        required: true
    }

})
const User = mongoose.model('User', userShema);
module.exports = User