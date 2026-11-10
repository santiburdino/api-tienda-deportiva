const categoryService = require('../services/categoryService');


const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorias', error: error.message });
    }
};


const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Categoria no encontrada' });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: 'ID de categoria invalido' });
    }
};


const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la categoria', error: error.message });
    }
};


const deleteCategory = async (req, res) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Categoria no encontrada' });
        }

        res.status(200).json({ message: 'Categoria eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar la categoria', error: error.message });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
};