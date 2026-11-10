const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function () {
    if (!this.isModified('contrasena')) {
        return;
    }

    this.contrasena = await bcrypt.hash(this.contrasena, 10);
});

module.exports = mongoose.model('User', userSchema);