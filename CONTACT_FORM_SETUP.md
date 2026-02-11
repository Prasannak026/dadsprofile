# Contact Form Setup (FormSubmit)

The contact form uses **FormSubmit** - a completely free service that requires **zero configuration**!

## How It Works

1. User fills out the contact form on your website
2. Form submits to `formsubmit.co/pratap1964@yahoo.co.in`
3. FormSubmit sends the message to **pratap1964@yahoo.co.in**
4. User receives an **auto-reply** confirmation email

## First Time Setup (One-Time Only)

The **first time someone submits** the form:

1. FormSubmit will send a **verification email** to `pratap1964@yahoo.co.in`
2. Click the **"Activate Form"** button in that email
3. Done! All future submissions will work automatically

## Features Already Configured

✅ **Auto-Reply**: Users get automatic confirmation email  
✅ **Spam Protection**: Honeypot field prevents bots  
✅ **Nice Template**: Emails use FormSubmit's "box" template  
✅ **Custom Subject**: "New Contact Form Submission"  
✅ **No API Keys**: No configuration or secrets needed

## What Users See

**Submission Flow:**
1. User fills form → clicks "Send Message"
2. FormSubmit shows success page
3. User receives auto-reply: _"Thank you for contacting Dr. Pratap Darigi. I have received your message and will respond within 24-48 hours."_
4. You receive email with their: name, email, phone, message

## Email Format

You'll receive emails like this:

```
From: FormSubmit <noreply@formsubmit.co>
Subject: New Contact Form Submission

Name: John Doe
Email: john@example.com
Phone: +91 9876543210
Message: I need consultation for my 5000-bird farm...
```

## Troubleshooting

**Not receiving emails?**
- Check spam/junk folder
- Verify you clicked "Activate Form" in the first verification email
- Make sure `pratap1964@yahoo.co.in` is correct in `src/sections/Contact.tsx`

**Want to change email address?**
- Edit `src/sections/Contact.tsx`
- Change `action="https://formsubmit.co/YOUR_NEW_EMAIL@example.com"`
- Remember to activate the new email when first submission arrives

**Want to customize auto-reply message?**
- Edit `src/sections/Contact.tsx`
- Change the `_autoresponse` hidden input value

## Cost

**100% Free Forever** - No limits, no registration, no API keys needed! 🎉
