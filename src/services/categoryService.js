const Category = require('../models/categoryModel');


const getAllCategories = async () => {
    return await Category.find();
};


const getCategoryById = async (id) => {
    return await Category.findById(id);
};


const createCategory = async (categoryData) => {
    const newCategory = new Category(categoryData);
    return await newCategory.save();
};


const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
};