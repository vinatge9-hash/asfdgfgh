const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Serve static files from root so HTML pages load directly
app.use(express.static(path.dirname(__filename)));

// Mock Stripe-like endpoint
app.post('/mock/payment-intent', (req, res) => {
  const amount = req.body?.amount ?? 0;
  // Return a fake clientSecret suitable for a mock flow
  const clientSecret = 'pi_mock_' + Date.now() + '_secret_' + (amount || 0);
  res.json({ clientSecret, publishableKey: 'pk_test_mock' });
});

app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});
