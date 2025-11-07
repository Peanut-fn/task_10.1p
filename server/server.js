// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const subscribers = []; // simple in-memory store (for demo only)

// Endpoint to subscribe
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email required' });

  if (subscribers.includes(email)) {
    return res.status(200).json({ message: 'Already subscribed' });
  }
  subscribers.push(email);

  try {
    // Create ethereal test account on the fly (no real SMTP needed)
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    const mailOptions = {
      from: `"DEV@Deakin" <${testAccount.user}>`,
      to: email,
      subject: 'Welcome to DEV@Deakin newsletter',
      text: `Hi,\n\nThanks for subscribing to DEV@Deakin!`,
      html: `<p>Hi,</p><p>Thanks for subscribing to <strong>DEV@Deakin</strong>!</p>`
    };

    const info = await transporter.sendMail(mailOptions);

    // nodemailer.getTestMessageUrl(info) gives a preview URL for the email (Ethereal)
    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log('Email sent (preview):', previewUrl);
    return res.status(200).json({ message: 'Subscribed', previewUrl });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ message: 'Failed to send email' });
  }
});

// health
app.get('/api/ping', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
