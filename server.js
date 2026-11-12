const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// JSON body parser for form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve main landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Waitlist API endpoint
app.post('/api/waitlist', (req, res) => {
  const { name, whatsapp, businessName, businessType, participantCount } = req.body;
  console.log('📋 New Waitlist Registration:', { name, whatsapp, businessName, businessType, participantCount });
  // TODO: Save to database / send WhatsApp notification
  res.json({ success: true, message: 'Pendaftaran waitlist berhasil!' });
});

app.listen(PORT, () => {
  console.log(`\n  🏨 GloHC Landing Page is live at http://localhost:${PORT}\n`);
});

