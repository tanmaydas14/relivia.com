# Relivia - Sustainable Solutions Website

A professional, fully responsive website for Relivia, showcasing innovative sustainable products made from agricultural residue, city leaves, and recovered fibers.

![Relivia Website](https://img.shields.io/badge/Status-Ready-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🌱 About Relivia

Relivia transforms farm residue, city leaves, and recovered fibers into innovative paper, packaging, and cloth solutions for India. All manufacturing is powered by efficient biomass boilers, ensuring a minimal carbon footprint.

## 📦 Product Range

- **Bioplastic Lined Cups** - PHA/PHBV biodegradable cups
- **Honeycomb Paper Wrap** - Sustainable bubble wrap alternative
- **Paper Bags** - Durable bags from recycled pulp
- **Cloth Bags** - Stylish bags from upcycled textiles
- **Seed Pencils** - Plantable pencils from fiber residues

*Note: Common Pulping product page still exists but is not featured on the main landing page.*

## ✨ Features

- **Fully Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Fade-ins, hover effects, and transitions
- **Interactive Product Pages** - Detailed specifications and ordering
- **Custom Upload Feature** - Users can upload designs for customization
- **Process Visualization** - Step-by-step manufacturing process
- **Contact Form** - Easy customer communication
- **Mobile-Friendly Navigation** - Hamburger menu for small screens
- **Modern UI/UX** - Professional, clean, and engaging design

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Git (for deployment)
- GitHub account (for hosting)

### Local Development

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/yourusername/relivia-website.git
   cd relivia-website
   ```

2. **Add Your Images**
   - Place your logo in `assets/images/logo.png`
   - Add hero background in `assets/images/hero-bg.png`
   - Add product images in `assets/images/products/` (PNG format)
   - Add process images in `assets/images/process/` (PNG format)
   - See `assets/README.md` for detailed requirements

3. **Open in Browser**
   - Simply open `index.html` in your browser
   - No build process or server required!

### Customization

#### Update Contact Information

Edit `index.html` and find the contact section:
```html
<!-- Line ~700 -->
<p>Manufacturing Unit, Industrial Area<br>India</p>
<p>+91 XXXXX XXXXX</p>
<p>info@relivia.in</p>
```

#### Update Colors

Edit `styles.css` root variables (lines 10-20):
```css
:root {
    --primary-color: #2d6a4f;    /* Main brand color */
    --primary-dark: #1b4332;     /* Darker shade */
    --secondary-color: #52b788;  /* Accent color */
    /* ... */
}
```

#### Modify Text Content

All text content is in the HTML files:
- Main page: `index.html`
- Product pages: `products/*.html`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📂 File Structure

```
relivia-website/
├── index.html                  # Main homepage
├── styles.css                  # Main stylesheet
├── script.js                   # Main JavaScript
├── README.md                   # This file
├── DEPLOYMENT.md               # Deployment instructions
├── assets/
│   ├── README.md              # Image guidelines
│   └── images/
│       ├── logo.png           # Main logo (PNG format)
│       ├── hero-bg.png        # Hero background (PNG format)
│       ├── products/          # Product images (PNG format)
│       └── process/           # Process images (PNG format)
└── products/
    ├── bioplastic-cups.html
    ├── honeycomb-wrap.html
    ├── paper-bags.html
    ├── cloth-bags.html
    ├── seed-pencils.html
    ├── common-pulping.html    # Not featured on main page
    ├── product-styles.css
    └── product-script.js
```

## 🌐 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to:
- GitHub Pages (Free, Recommended)
- Netlify
- Vercel
- Custom hosting

### Quick Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/relivia-website/`

**Detailed step-by-step instructions available in DEPLOYMENT.md**

## 🔧 Configuration

### Form Handling

The contact and order forms currently show alerts. To make them functional:

**Option 1: Netlify Forms** (Easiest if deploying to Netlify)
- Add `data-netlify="true"` to form tags
- Forms will automatically work!

**Option 2: FormSpree** (Works anywhere)
- Sign up at https://formspree.io
- Replace form submission code in `script.js` and `product-script.js`

**Option 3: EmailJS** (Client-side email)
- Sign up at https://www.emailjs.com
- Add their SDK and configure

**Option 4: Custom Backend**
- Create your own API endpoint
- Update form submission handlers

### Analytics

To add Google Analytics:
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 💡 Tips for Best Results

1. **Use High-Quality Images**
   - Professional product photography
   - Consistent lighting and backgrounds
   - Optimize for web (compress images)

2. **Test Thoroughly**
   - Check on different devices
   - Test all links and forms
   - Verify images load correctly

3. **SEO Optimization**
   - Update meta descriptions
   - Add alt text to images (already included)
   - Create sitemap.xml
   - Add robots.txt

4. **Performance**
   - Compress images before uploading
   - Use lazy loading (already implemented)
   - Enable caching on your server

## 📞 Support

If you encounter any issues:

1. Check `assets/README.md` for image requirements
2. Review `DEPLOYMENT.md` for hosting issues
3. Check browser console (F12) for errors
4. Verify all file paths are correct

## 🎨 Design Credits

- Font Awesome for icons
- Google Fonts (Poppins, Playfair Display)
- Color scheme inspired by sustainable design principles

## 📄 License

This project is created for Relivia. All rights reserved.

## 🌟 Acknowledgments

Built with modern web technologies:
- Pure HTML5, CSS3, JavaScript (No frameworks!)
- Responsive design principles
- Accessibility best practices
- Performance optimization

---

**Ready to go live?** Follow the instructions in [DEPLOYMENT.md](DEPLOYMENT.md) to deploy your website!

For questions or support, contact: info@relivia.in
