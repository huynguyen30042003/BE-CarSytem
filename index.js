// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importing cors
// const serviceRoutes = require('./routes/serviceRoutes')
const accountRoutes = require('./routes/accountRoutes')
const authRoutes = require('./routes/authRoutes')
dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors({ origin: true }));

app.use(express.json());
// app.use('/api/services', serviceRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
