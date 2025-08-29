# Niyantran - Coffee Website (Mock Stripe Backend)

This repository contains a full, responsive static website for a coffee shop named Niyantran, with a mock Stripe backend to demonstrate a payment flow without real charges.

What’s included
- Home, Menu, About, Cart, Checkout, Contact pages
- Default menu items with prices and descriptions
- About page listing founders: GSR and MBR
- Full cart flow (localStorage based) and a mock Stripe checkout flow
- A small Express server exposing a mock endpoint to generate a payment intent clientSecret
- Tailwind CSS-based styling and responsive design

How to run
1) Install dependencies
   npm install

2) Start the mock API server
   npm start
   This will launch the server on http://localhost:3000

3) Open the site
   Navigate to http://localhost:3000/index.html (or /, depending on your server setup)

Notes
- The checkout flow uses a mock backend endpoint at /mock/payment-intent to obtain a fake clientSecret. The actual card processing is simulated for development purposes; this is not real payment processing.
- The UI uses Tailwind CSS classes directly in HTML for styling and responsiveness.
- All images are placeholders using the pattern: src="https://images.unsplash.com/photo-1673146479291-89b23c1c4576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw5fHxkZXNjcmlwdGlvbnxlbnwwfDB8fHwxNzU2MzY1MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080" and are responsive with object-cover and explicit heights where appropriate.

