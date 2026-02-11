# Pratap Darigi Consulting Website

Modern, sleek personal consulting site built with React, Vite, Tailwind CSS, Framer Motion, and lightweight 3D visuals.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Environment variables

Update these values in your `.env` file:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_TEMPLATE_ID_CONTACT`
- `VITE_EMAILJS_TEMPLATE_ID_BOOKING`
- `VITE_RAZORPAY_KEY_ID`
- `VITE_SCHEDULING_URL`

## Notes

- Razorpay integration uses the Checkout script on the client. For production use, create orders on a backend.
- Replace the profile image placeholder in the hero section with the actual photo when ready.
