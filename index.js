const express = require('express');
const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Node');
});

// API route
app.get('/api/message', (req, res) => {
    res.json({
        message: "This is a simple API response",
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});