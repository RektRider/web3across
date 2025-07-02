const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

<<<<<<< HEAD
// Middleware to parse incoming JSON
=======
>>>>>>> f41ea54 (Updated form email logic and minor HTML changes)
app.use(express.json());

<<<<<<< HEAD
// Serve static frontend files (e.g. index.html, CSS, JS) from "public" folder
=======
>>>>>>> f41ea54 (Updated form email logic and minor HTML changes)
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-form', async (req, res) => {
  const { name, project, location, email, services, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mdrehanthakur786@gmail.com',
      pass: process.env.EMAIL_PASS 
    }
  });

  const mailOptions = {
    from: 'mdrehanthakur786@gmail.com',
    to: 'mdrehanthakur786@gmail.com',
    subject: `New Form Submission from ${name}`,
    text: `
New message received:

Name: ${name}
Project: ${project}
Location: ${location}
Email: ${email}
Services: ${services}
Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Message received and emailed!');
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).send('Something went wrong.');
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
