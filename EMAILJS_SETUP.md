# EmailJS Setup Guide

Follow these steps to configure free email functionality for the contact form.

## Step 1: Create Free EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** (free tier allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Click **Connect Account** and authorize with **pratap1964@yahoo.co.in** (or your email)
5. Note the **Service ID** (e.g., `service_abc1234`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set **Template Name**: `Contact Form Submission`
4. Configure the template:

### Template Content:
```
Subject: New Contact Form Submission from {{name}}

From: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent via the contact form on your website.
```

### To Email:
```
pratap1964@yahoo.co.in
```

### Auto-Reply Settings:
- Enable **Auto-Reply**
- Set **Reply-To Email**: `{{email}}`
- **Auto-Reply Subject**: `Thank you for contacting Dr. Pratap Darigi`
- **Auto-Reply Message**:
```
Dear {{name}},

Thank you for reaching out. I have received your message and will respond within 24-48 hours.

Your message:
{{message}}

Best regards,
Dr. Pratap Darigi
Former CTO, ICAR-Directorate of Poultry Research

---
This is an automated confirmation. Please do not reply to this email.
```

5. Click **Save**
6. Note the **Template ID** (e.g., `template_abc1234`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz456`)

## Step 5: Configure Environment Variables

Open the `.env` file in your project and fill in the values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_PUBLIC_KEY=abc123xyz456
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_abc1234
```

Replace the example values with your actual IDs from EmailJS dashboard.

## Step 6: Test Locally

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Fill out the contact form and submit
3. Check:
   - pratap1964@yahoo.co.in receives the message
   - User receives auto-reply confirmation

## Step 7: Deploy with Environment Variables

For GitHub Pages, you need to add environment variables during build:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each variable:
   - Name: `VITE_EMAILJS_SERVICE_ID`, Value: `service_abc1234`
   - Name: `VITE_EMAILJS_PUBLIC_KEY`, Value: `abc123xyz456`
   - Name: `VITE_EMAILJS_TEMPLATE_ID_CONTACT`, Value: `template_abc1234`

5. Update `.github/workflows/deploy.yml` to use these secrets (already configured)

## Troubleshooting

**Emails not sending:**
- Check browser console for errors
- Verify all environment variables are set correctly
- Ensure EmailJS service is connected and active
- Check EmailJS dashboard logs

**Auto-reply not working:**
- Verify auto-reply is enabled in template settings
- Check spam folder
- Ensure `{{email}}` variable is in the template

**Rate limiting:**
- Free tier: 200 emails/month
- Upgrade to paid plan if needed

## Email Template Variables

Available in your templates:
- `{{name}}` - User's name
- `{{email}}` - User's email
- `{{phone}}` - User's phone number
- `{{message}}` - User's message

These are automatically sent from the contact form.
