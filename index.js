const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

// GET ROUTE
app.get("/bfhl", (req, res) => {
    res.json({
        "operation_code": 1
    });
});

// POST ROUTE
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ 
            is_success: false, 
            error: 'Data should be an array'
        });
    }

    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(Number(item));
        } else if (typeof item === 'string' && item.length === 1) {
            alphabets.push(item);
            if (item === item.toLowerCase() && item >= highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "anushka_biswas_24012003",
        email: "anushkabiswas796@gmail.com",
        roll_number: "21BCE10796",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet || null
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});