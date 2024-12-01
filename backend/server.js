const express = require('express');
const connectDB = require('./config/db');
const routes = require("./routes/api/book");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({origin: true, credentials: true}));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use("/api/book", routes);

// Connect to Database
connectDB();

// Basic route
app.get('/', (req, res) => res.send('Hello world!'));

// Vercel serverless function exports
module.exports = app;
