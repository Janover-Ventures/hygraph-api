const express = require('express');
const cors = require('cors');
const convertHtmlToSlate = require('./htmlToSlate');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// API endpoint
app.post('/convert', async (req, res) => {
    try {
        const { html } = req.body;
        const result = await convertHtmlToSlate(html);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// For Heroku deployment - use provided PORT or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});