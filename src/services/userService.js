const User = require('../models/userModel');


const getAllUsers = async () => {
    return await User.find().select('-contrasena');
};


const getUserById = async (id) => {
    return await User.findById(id).select('-contrasena');
};


const createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};


const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};