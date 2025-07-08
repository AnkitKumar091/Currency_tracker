const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

// Currency API Route
app.get('/api/rates', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.apilayer.com/fixer/latest?base=USD&symbols=INR,EUR,GBP',
      {
        headers: {
          apikey: process.env.FIXER_API_KEY
        }
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch exchange rates' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
