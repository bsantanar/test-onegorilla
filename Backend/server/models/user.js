const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

//Esquema de usuario y valores
let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is necessary']
    },
    email: {
        type: String,
        //unique: true,
        required: [true, 'email is necessary']
    },
    nValue: {
        type: Number,
        required: [true, 'n value is required']
    },
    mValue: {
        type: [Number],
        required: [true, 'm value is required']
    },
    result: {
        type: Boolean,
        required: [true, 'result is required']
    }
});


//Validador de campo unico
//userSchema.plugin(uniqueValidator, { message: '{PATH} already exists' });

module.exports = mongoose.model('User', userSchema);