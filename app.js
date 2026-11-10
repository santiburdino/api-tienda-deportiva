const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./src/config/db');

const productRoutes = require('./src/routes/productRoute');
const categoryRoutes = require('./src/routes/categoryRoute');
const userRoutes = require('./src/routes/userRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API de la tienda de articulos deportivos funcionando correctamente'
    });
});

app.use('/api/productos', productRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/usuarios', userRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Servidor funcionando en el puerto ${PORT}`);
    });
};

startServer();