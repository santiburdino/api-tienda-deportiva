const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            error: error.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: 'ID de usuario invalido',
            error: error.message
        });
    }
};

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            message: 'Usuario creado correctamente',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al crear el usuario',
            error: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        res.status(200).json({
            message: 'Usuario eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al eliminar el usuario',
            error: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};