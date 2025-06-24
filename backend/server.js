const express = require('express'); 
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/places', async (req, res) => {
  const { location, radius, cuisine } = req.query;

  if (!location || !radius || !cuisine) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=restaurant&keyword=${encodeURIComponent(
    cuisine
  )}&key=${process.env.GOOGLE_PLACES_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch from Google Places API' });
  }
});

app.listen(5001, () => {
  console.log('Backend listening on http://localhost:5001');
});
