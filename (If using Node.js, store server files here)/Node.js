const express = require('express');

const fs = require('fs');

const cors = require('cors');
 
const app = express();

const PORT = 3000;
 
// Middleware

app.use(express.json()); // Allows JSON request bodies

app.use(cors()); // Enables cross-origin requests
 
// Create logs folder if it doesn't exist

if (!fs.existsSync('logs')) {

    fs.mkdirSync('logs');

}

const logStream = fs.createWriteStream('logs/server.log', { flags: 'a' });
 
// Logging middleware

app.use((req, res, next) => {

    const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;

    logStream.write(logEntry);

    console.log(logEntry);

    next();

});
 
// Test Route

app.get('/', (req, res) => {

    res.send('Fun3Ds Backend is Running!');

});
 
// Example Route for Products (To be expanded later)

app.get('/products', (req, res) => {

    res.json([

        { id: 1, name: '3D Printed Keychain', price: 5 },

        { id: 2, name: '3D Printed Figurine', price: 10 },

        { id: 3, name: '3D Printed Phone Stand', price: 8 }

    ]);

});
 
// Start Server

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});

 