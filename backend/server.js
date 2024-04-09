// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Create a database connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_database'
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
  // Extract name and email from request body
  const { name, email } = req.body;
  console.log(req.body);

  // Log the name and email received from the form
  console.log('Name:', name);
  console.log('Email:', email);

  // Insert data into the database
  pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    console.log('Data inserted successfully');
    res.send('Data inserted successfully');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
