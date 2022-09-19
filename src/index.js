// Handle .env
require('dotenv').config({ path: '.env' });

// Import required files
const ServerConfig = require('./config/ServerConfig')
const Express = require('express');
const Path = require('path');
const bodyParser = require('body-parser');
const CORS = require('cors');
const restPublicRoutes = require('./routes/publicRoutes');

// Setup express
const server = Express();
server.use(CORS());
server.use(bodyParser.json({ limit: '10mb', extended: true }));
server.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Set router
server.use('/storage', Express.static(Path.join(__dirname, '../storage')));
server.use('/rest/public', restPublicRoutes);

// Start server
server.listen(ServerConfig.SERVER_PORT);
console.log("----------------------------------------")
console.log(`Server Running on `);
console.log(`PORT: ${ServerConfig.SERVER_PORT}`)
console.log(`URL: ${ServerConfig.SERVER_URL}`)
console.log("----------------------------------------")