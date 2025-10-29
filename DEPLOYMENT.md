# 🚀 Deployment Guide - Relivia Website

This guide will walk you through deploying your Relivia website for **FREE** using GitHub Pages.

## Prerequisites

- ✅ All your images added to the `assets` folder
- ✅ Contact information updated in HTML files
- ✅ Website tested locally and working
- ✅ A GitHub account (free)
- ✅ Git installed on your computer

## 📋 Table of Contents

1. [Option 1: GitHub Pages (Recommended)](#option-1-github-pages-recommended)
2. [Option 2: Netlify](#option-2-netlify)
3. [Option 3: Vercel](#option-3-vercel)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Troubleshooting](#troubleshooting)

---

## Option 1: GitHub Pages (Recommended)

**FREE hosting with GitHub Pages! Perfect for static websites.**

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up" and follow the instructions
3. Verify your email address

### Step 2: Install Git (if not already installed)

**Windows:**
1. Download from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer (use default settings)
3. Open Command Prompt or PowerShell

**Mac:**
1. Open Terminal
2. Type: `git --version`
3. If not installed, it will prompt you to install

**Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/Fedora
```

### Step 3: Prepare Your Repository

1. **Open Terminal/Command Prompt** in your website folder:
   ```bash
   cd C:\Users\vinay\CascadeProjects\Relivia-Website
   ```

2. **Initialize Git repository:**
   ```bash
   git init
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Create first commit:**
   ```bash
   git commit -m "Initial commit - Relivia website"
   ```

### Step 4: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `relivia-website` (or any name you like)
3. **Description:** "Official website for Relivia - Sustainable Solutions"
4. Select **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 5: Push to GitHub

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/relivia-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**If asked for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (see below)

#### Creating a Personal Access Token

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token" > "Generate new token (classic)"
3. Name it: "Relivia Website Deployment"
4. Select scope: Check **repo** (full control)
5. Click "Generate token"
6. **COPY THE TOKEN** (you can't see it again!)
7. Use this token as your password when pushing

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 7: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/relivia-website/
```

🎉 **Congratulations! Your website is now live!**

### Updating Your Website

Whenever you make changes:

```bash
# 1. Make your changes to the files

# 2. Add changes
git add .

# 3. Commit with a message
git commit -m "Updated contact information"

# 4. Push to GitHub
git push

# Wait 1-2 minutes for changes to go live
```

---

## Option 2: Netlify

**Alternative free hosting with excellent features**

### Quick Deploy (Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up (free account)
3. Drag your entire website folder to Netlify
4. Done! Your site is live

### Deploy from GitHub (Recommended)

1. Follow steps 1-5 from GitHub Pages above
2. Go to [netlify.com](https://www.netlify.com) and sign in
3. Click **Add new site** > **Import an existing project**
4. Choose **GitHub** and authorize
5. Select your `relivia-website` repository
6. Click **Deploy site**
7. Your site will be live with a random URL like `random-name-123.netlify.app`

### Enable Netlify Forms (Bonus!)

To make your contact forms work automatically:

1. In `index.html`, find the contact form (around line 673)
2. Add `data-netlify="true"` to the `<form>` tag:
   ```html
   <form class="contact-form" id="contactForm" data-netlify="true" name="contact">
   ```
3. Add hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```
4. Do the same for order forms in product pages
5. Push changes to GitHub
6. Forms will now send submissions to your Netlify dashboard!

---

## Option 3: Vercel

**Another excellent free option**

1. Push your code to GitHub (Steps 1-5 from GitHub Pages)
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click **Add New** > **Project**
5. Import your `relivia-website` repository
6. Click **Deploy**
7. Done! Site is live

---

## Custom Domain Setup

Want to use your own domain like `www.relivia.in`?

### For GitHub Pages

1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. In your repository, create a file named `CNAME` (no extension)
3. Add your domain: `www.relivia.in`
4. In your domain registrar, add these DNS records:

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

   **For apex domain (relivia.in):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

5. Wait 24-48 hours for DNS propagation
6. In GitHub Pages settings, enable **Enforce HTTPS**

### For Netlify

1. Go to your site settings in Netlify
2. Click **Domain management** > **Add custom domain**
3. Enter your domain
4. Follow Netlify's DNS setup instructions (very easy!)
5. Netlify automatically provides FREE SSL certificate

---

## Making Forms Functional

Choose one option:

### Option A: Netlify Forms (if using Netlify)
Already covered above - just add `data-netlify="true"`

### Option B: FormSpree (works anywhere)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. In `script.js`, replace the form submission code:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Thank you! We will get back to you soon.');
            contactForm.reset();
        }
    } catch (error) {
        alert('There was an error. Please try again.');
    }
});
```

### Option C: EmailJS (client-side)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add their SDK before `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
3. Follow their documentation to integrate

---

## Adding Google Analytics

Track your website visitors:

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## SEO Optimization

### 1. Update Meta Tags

In `index.html` `<head>` section:

```html
<meta name="description" content="Relivia - Transforming agricultural residue into sustainable paper, packaging, and cloth solutions for India">
<meta name="keywords" content="sustainable packaging, eco-friendly paper, agricultural residue, bioplastic cups, cloth bags, India">
<meta name="author" content="Relivia">

<!-- Open Graph for social media -->
<meta property="og:title" content="Relivia - Sustainable Solutions">
<meta property="og:description" content="Transforming farm residue into innovative sustainable products">
<meta property="og:image" content="https://yourwebsite.com/assets/images/hero-bg.jpg">
<meta property="og:url" content="https://yourwebsite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Relivia - Sustainable Solutions">
<meta name="twitter:description" content="Eco-friendly paper and packaging solutions">
```

### 2. Create sitemap.xml

Create `sitemap.xml` in root folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourwebsite.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourwebsite.com/products/common-pulping.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourwebsite.com/products/bioplastic-cups.html</loc>
    <priority>0.8</priority>
  </url>
  <!-- Add all product pages -->
</urlset>
```

### 3. Create robots.txt

Create `robots.txt` in root folder:

```
User-agent: *
Allow: /
Sitemap: https://yourwebsite.com/sitemap.xml
```

---

## Troubleshooting

### Images Not Showing

**Problem:** Broken image icons appear

**Solutions:**
1. Check file names match exactly (case-sensitive on servers)
2. Verify images are in correct folders
3. Check file extensions (.jpg not .jpeg)
4. Use relative paths (already done in code)

### GitHub Pages Shows 404

**Problem:** Page not found error

**Solutions:**
1. Wait 2-5 minutes after enabling Pages
2. Check branch is set to `main`
3. Verify `index.html` is in root folder
4. Clear browser cache (Ctrl+F5)

### Forms Not Working

**Problem:** Form submissions don't do anything

**Solutions:**
1. Follow form setup instructions above
2. Add form handling service (Netlify, FormSpree, etc.)
3. Check browser console for errors (F12)

### Website Looks Different on Server

**Problem:** Styling breaks after deployment

**Solutions:**
1. Check all CSS files are uploaded
2. Verify file paths in HTML
3. Clear browser cache
4. Check browser console for missing files

### Custom Domain Not Working

**Problem:** Domain shows error or doesn't connect

**Solutions:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS records are correct
3. Remove `www.` from CNAME file if using apex domain
4. Use DNS checker: [whatsmydns.net](https://www.whatsmydns.net)

---

## Performance Optimization

### Image Optimization

Before uploading images:

1. **Resize** to recommended dimensions (see `assets/README.md`)
2. **Compress** using:
   - [TinyPNG](https://tinypng.com)
   - [ImageOptim](https://imageoptim.com) (Mac)
   - [Squoosh](https://squoosh.app) (online)
3. Aim for **<200KB per image**

### Enable Caching

GitHub Pages automatically handles caching. For custom servers, add to `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Security Checklist

✅ Enable HTTPS (automatic on GitHub Pages/Netlify)  
✅ Remove any API keys from public code  
✅ Use environment variables for sensitive data  
✅ Keep dependencies updated  
✅ Add security headers (automatic on Netlify)

---

## Next Steps After Deployment

1. ✅ Test all links and forms
2. ✅ Check mobile responsiveness
3. ✅ Submit sitemap to Google Search Console
4. ✅ Add to Bing Webmaster Tools
5. ✅ Set up Google Analytics
6. ✅ Share on social media
7. ✅ Monitor website performance
8. ✅ Collect customer feedback

---

## Support Resources

- **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/pages)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **FormSpree Docs:** [help.formspree.io](https://help.formspree.io)
- **Web.dev:** [web.dev](https://web.dev) (optimization tips)

---

## 🎉 Congratulations!

Your Relivia website is now live and accessible to customers worldwide!

**Share your success:**
- Website URL: `https://YOUR_USERNAME.github.io/relivia-website/`
- Update social media profiles
- Add to business cards
- Include in email signatures

**Questions?** Create an issue on GitHub or contact your web developer.

---

*Last Updated: October 2025*
