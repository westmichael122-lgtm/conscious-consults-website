# 📧 Email Setup Guide for Contact Form

Your contact form is now ready to send real emails! Here's how to set it up.

---

## 🎯 Quick Setup (5 Minutes Total)

### Step 1: Get Your Free Resend API Key (2 minutes)

1. **Go to:** https://resend.com/signup
2. **Sign up** (it's FREE!)
   - Use your email: `westmichael122@gmail.com`
   - Or any email you prefer
3. **Verify your email** (check your inbox for verification link)
4. **After verification, go to:** https://resend.com/api-keys
5. **Click:** "Create API Key"
6. **Name it:** `conscious-consults-website`
7. **Click:** "Add"
8. **Copy the API key** (you'll only see it once!)

---

### Step 2: Add API Key to Environment Variables

You have TWO options:

#### Option A: Test Locally (On this development machine)

Create or edit the `.env` file:
```bash
# In /home/z/my-project/.env
RESEND_API_KEY=re_your_actual_api_key_here
```

Replace `re_your_actual_api_key_here` with the key you copied from Resend.

#### Option B: Deploy to Vercel (Recommended - Easier!)

1. **Go to your Vercel project dashboard**
   - URL: `https://vercel.com/dashboard`
2. **Click** on your project: `conscious-consults-website`
3. **Click** "Settings" tab (top)
4. **Click** "Environment Variables" in left menu
5. **Click** "Add New" button
6. **Fill in:**
   - **Name:** `RESEND_API_KEY`
   - **Value:** Paste your Resend API key
7. **Click** "Save"
8. **Click** "Redeploy" button at top

✅ **That's it!** Vercel will redeploy with the API key configured!

---

## 📋 What Will Happen?

When someone fills out your contact form:

1. ✅ Form sends data to `/api/route`
2. ✅ API validates the input
3. ✅ Resend sends an email to `westmichael122@gmail.com`
4. ✅ Email includes:
   - Sender's name
   - Sender's email
   - Message
   - Nicely formatted HTML

---

## 📧 Example Email You'll Receive:

```
Subject: New Contact Form Submission from [Name]

New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━

From:
[Sender's Name]

Email:
[sender@email.com]

Message:
[The full message they sent]

This message was sent from your website contact form.
```

---

## 🔒 Security Notes

✅ **Your API key is secure:**
- `.env` file is in `.gitignore` (won't be uploaded to GitHub)
- Vercel environment variables are encrypted
- Never share your API key publicly

---

## 🧪 Test Your Email Form

### After Adding API Key:

1. **Go to your live website:**
   ```
   https://conscious-consults-website.vercel.app
   ```
2. **Scroll to** "Connect" section at bottom
3. **Fill out** the form:
   - Name: Test User
   - Email: your.email@test.com
   - Message: This is a test of the contact form
4. **Click:** "Send Message"
5. **Check your inbox:** `westmichael122@gmail.com`

You should receive the email within 10-30 seconds!

---

## 💡 Pro Tips

### Free Tier Details (Resend)
- ✅ 3,000 emails per month
- ✅ 100 emails per day
- ✅ Perfect for business contact forms
- ✅ No credit card needed

### If You Need More
You can upgrade anytime:
- 50,000 emails/month for $20
- 100,000 emails/month for $40

### Custom Email Domain (Optional, Free!)
You can also set up a custom domain like:
- `contact@consciousconsults.com`
- `hello@consciousconsults.com`

See: https://resend.com/domains

---

## 🎯 Complete Checklist

- [ ] Sign up for Resend (free)
- [ ] Verify your email
- [ ] Create API Key
- [ ] Add API Key to Vercel Environment Variables
- [ ] Redeploy on Vercel
- [ ] Test contact form on live site
- [ ] Check inbox for test email

---

## ❓ Common Questions

### Q: Do I have to use Resend?
A: No! You could also use:
- SendGrid
- EmailJS
- Postmark
- Mailgun

But Resend is free, simple, and has great documentation.

### Q: Will my API key ever expire?
A: No, API keys don't expire. But you can delete them and create new ones anytime.

### Q: Can I change the destination email?
A: Yes! Just update this line in `src/app/api/route.ts`:
```javascript
to: "your-new-email@example.com",
```

### Q: What if someone submits spam?
A: The form sends everything. You can:
- Block emails in Gmail
- Add CAPTCHA later if needed
- Use the Resend dashboard to review all sent emails

---

## 🚀 Ready to Go!

Once you add the API key to Vercel and redeploy, your contact form will be fully functional!

**Need help?** Just let me know where you get stuck and I'll walk you through it!

---

**Made with ❤️ for Conscious Consults & Construction LLC**
