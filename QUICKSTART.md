# ⚡ Quick Start Guide

Get your Relivia website up and running in 10 minutes!

## 🎯 Before You Start

Make sure you have:
- [ ] Your logo image ready
- [ ] Product photos prepared
- [ ] Contact information (phone, email, address)
- [ ] A GitHub account (create free at github.com)

## 📝 Step 1: Add Your Content (5 minutes)

### Add Your Logo
1. Place your logo file in: `assets/images/`
2. Rename it to: `logo.jpg` (or update the path in HTML)

### Add Product Images
1. Go to: `assets/images/products/`
2. Add images for each product:
   - `common-pulping.jpg`, `common-pulping-2.jpg`, `common-pulping-3.jpg`
   - `bioplastic-cups.jpg`, `bioplastic-cups-2.jpg`, `bioplastic-cups-3.jpg`
   - And so on for all products

### Update Contact Info
1. Open `index.html` in a text editor
2. Press `Ctrl+F` and search for: `+91 XXXXX XXXXX`
3. Replace with your actual phone number
4. Search for: `info@relivia.in`
5. Replace with your email
6. Update the address in the contact section

## 🧪 Step 2: Test Locally (2 minutes)

1. Open `index.html` in your web browser
2. Click through all pages
3. Check if images load correctly
4. Test the navigation menu
5. Verify contact information is correct

✅ Everything looks good? Move to deployment!

## 🚀 Step 3: Deploy to GitHub Pages (3 minutes)

### First Time Setup

1. **Open Terminal/Command Prompt** in your website folder
   
   On Windows (PowerShell):
   ```powershell
   cd C:\Users\vinay\CascadeProjects\Relivia-Website
   ```

2. **Initialize and Push to GitHub:**
   ```bash
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Create first commit
   git commit -m "Initial commit"
   
   # Create repository on GitHub (do this in browser first!)
   # Then connect your local repo:
   git remote add origin https://github.com/YOUR_USERNAME/relivia-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo on github.com
   - Click Settings → Pages
   - Source: Select "main" branch
   - Click Save
   - Wait 2 minutes

4. **Visit Your Site:**
   ```
   https://YOUR_USERNAME.github.io/relivia-website/
   ```

🎉 **Done! Your website is LIVE!**

## 🔄 Updating Your Website

Made changes? Push them live:

```bash
git add .
git commit -m "Updated contact info"
git push
```

Wait 1-2 minutes, then refresh your site!

## 🆘 Common Issues

### "Images not showing"
- Check file names match exactly (case-sensitive)
- Verify images are in correct folders
- Clear browser cache (Ctrl+F5)

### "Git push rejected"
- Make sure you created the GitHub repo first
- Check if you're using Personal Access Token (not password)
- Try: `git pull origin main --rebase` then push again

### "404 Page Not Found"
- Wait 2-5 minutes after enabling Pages
- Check if `index.html` is in root folder
- Verify branch is set to "main" in Pages settings

## 📞 Need More Help?

- **Detailed Instructions:** See `DEPLOYMENT.md`
- **Image Guide:** See `assets/README.md`
- **Full Documentation:** See `README.md`

## ✨ Pro Tips

1. **Compress images** before adding (use tinypng.com)
2. **Test on mobile** by opening on your phone
3. **Add Google Analytics** to track visitors
4. **Set up form handling** (FormSpree or Netlify Forms)
5. **Use a custom domain** for professional look

## 🎯 Next Steps

Once live:
- [ ] Share URL with your team
- [ ] Test all forms
- [ ] Check on different devices
- [ ] Submit to Google Search Console
- [ ] Add to social media profiles
- [ ] Update business cards and emails

---

**That's it!** You now have a professional website for Relivia.

Questions? Check the full documentation or create an issue on GitHub.
