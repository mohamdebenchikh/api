const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Express REST API!');
});

// Import routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
