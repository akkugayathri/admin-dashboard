const express = require('express');
const router = express.Router();

// Test route (you can replace later)
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route is working' });
});

module.exports = router;
