// Install required packages: npm install express body-parser cors axios

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample route for handling personal information
app.post('/api/personal-info', async (req, res) => {
  const personalInfo = req.body;
  // Implement server-side validation and processing logic for personal information

  // For simplicity, just sending a success message
  res.json({ message: 'Personal information received successfully' });
});

// KYC Verification API Integration
app.post('/api/kyc-verification', async (req, res) => {
  const personalInfo = req.body;
  
  // Perform KYC verification with Digitap API
  try {
    const digitapResponse = await axios.post('https://digitap-api-url/kyc-verify', personalInfo);
    
    // Process Digitap KYC API response
    // Handle verification success or failure
    
    res.json({ success: true, message: 'KYC verification successful' });
  } catch (error) {
    // Handle Digitap KYC API error
    res.json({ success: false, message: 'KYC verification failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
