const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./src/config/db');
const appRoutes = require('./app');
const { PORT } = require('./src/config/envConfig.js');

dotenv.config();
const app = express();

app.use(express.json());
app.use(require('cors')());
connectDB()
app.use('/api',appRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
