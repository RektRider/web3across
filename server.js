const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files like index.html
app.use(express.static(path.join(__dirname, 'public')));

// Handle form POST submission
app.post('/submit-form', (req, res) => {
  const { name, project, location, email, services, message } = req.body;

  const entry = `
---------------------
Name: ${name}
Project: ${project}
Location: ${location}
Email: ${email}
Services: ${services}
Message: ${message}
---------------------
`;

  fs.appendFile('messages.txt', entry, err => {
    if (err) {
      console.error('Failed to save message:', err);
      return res.status(500).send('Something went wrong.');
    }

    res.send('Message received!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
