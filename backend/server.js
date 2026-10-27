const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and allow cross-origin requests from Angular
app.use(cors());
app.use(express.json());

// Mock Login API Endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    console.log(`Login attempt received for: ${email}`);

    // Hardcoded dummy check for testing
    if (email === 'admin@example.com' && password === 'password123') {
        res.status(200).json({ 
            success: true, 
            message: 'Login successful', 
            token: 'fake-jwt-token-12345' 
        });
    } else {
        res.status(401).json({ 
            success: false, 
            message: 'Invalid email or password' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});