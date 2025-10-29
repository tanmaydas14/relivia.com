# Assets Folder Guide

This folder contains all images and media files for the Relivia website.

## Folder Structure

```
assets/
├── images/
│   ├── logo.png                    # Main Relivia logo (PNG format, used in navbar)
│   ├── hero-bg.png                 # Hero section background image
│   ├── products/                   # Product images (one main image per product)
│   │   ├── bioplastic-cups.png
│   │   ├── honeycomb-wrap.png
│   │   ├── paper-bags.png
│   │   ├── cloth-bags.png
│   │   ├── seed-pencils.png
│   │   └── common-pulping.png      # (not featured on main landing page)
│   └── process/                    # Process step images
│       ├── agro-step1.png          # Agricultural residue collection
│       ├── agro-step2.png          # Cleaning and preparation
│       ├── agro-step3.png          # Pulping process
│       ├── agro-step4.png          # Product formation
│       ├── cloth-step1.png         # Textile fiber collection
│       ├── cloth-step2.png         # Quality sorting
│       ├── cloth-step3.png         # Design and cutting
│       └── cloth-step4.png         # Stitching and quality check
```

## Image Requirements

### Logo (logo.png)
- **Recommended Size:** 200x200 pixels or larger (square format)
- **Format:** PNG with transparent background (recommended)
- **Usage:** Appears in navigation bar at 50x50px, scales responsively
- **Location:** Place in `assets/images/logo.png`
- **Tip:** Use transparent background for best results on all page backgrounds

### Hero Background (hero-bg.png)
- **Recommended Size:** 1920x1080 pixels (Full HD)
- **Format:** PNG (optimized for web)
- **Style:** Nature-inspired, sustainable, professional
- **Suggestions:** 
  - Agricultural fields with residue
  - Sustainable paper manufacturing
  - Green leaves/natural fibers
  - Professional with warm tones
- **Location:** Place in `assets/images/hero-bg.png`
- **Note:** Can also support JPG, but PNG preferred for quality

### Product Images
- **Recommended Size:** 600x500 pixels or 800x800 pixels (landscape or square)
- **Format:** PNG (preserves quality and transparency if needed)
- **Requirements:**
  - High quality, professional photography
  - Clean white or neutral background preferred (transparent background supported)
  - Show product details clearly
  - **One main image per product** displayed prominently
  - Currently using placeholder images that can be easily replaced
- **Location:** Place in `assets/images/products/`
- **Naming Convention:** `product-name.png`
  - Examples: `bioplastic-cups.png`, `paper-bags.png`, `seed-pencils.png`

### Process Images
- **Recommended Size:** 800x600 pixels (landscape)
- **Format:** PNG (better quality for detailed process photos)
- **Requirements:**
  - Show actual manufacturing steps
  - Professional quality
  - Well-lit, clear images
  - Can include workers (with permission)
  - Should tell the story of your process
- **Location:** Place in `assets/images/process/`
- **Naming Convention:** `step-name.png` (e.g., `agro-step1.png`)

## How to Add Images

1. **Prepare Your Images:**
   - Resize images to recommended dimensions
   - Optimize for web (compress without losing quality)
   - Use tools like TinyPNG or ImageOptim

2. **Upload to Correct Folder:**
   - Place images in their respective subfolders
   - Use exact naming as shown in structure above
   - Keep file names lowercase with hyphens

3. **Test the Website:**
   - Open `index.html` in a browser
   - Check all images load correctly
   - Verify responsive display on mobile

## Placeholder Images

Currently, the website uses placeholder images from via.placeholder.com with product names. These will display until you replace them with actual images:
- **Products:** Green placeholders with product name text (600x500px)
- **Process steps:** To be added as needed
- **Hero:** Dark green gradient overlay
- **Logo:** Replace `assets/images/logo.png` with your actual logo

Each placeholder clearly indicates the file path for replacement (e.g., `assets/images/products/bioplastic-cups.png`)

**All images should be in PNG format** for best quality and consistency.

## Image Optimization Tips

1. **Use PNG format for all images** (better quality, supports transparency)
2. **Compress PNG files** before uploading to reduce file size without losing quality
   - Aim for <300KB per image for products
   - Aim for <800KB for hero background
3. **Use descriptive alt text** (already included in HTML for SEO and accessibility)
4. **Test on slow connections** to ensure fast loading
5. **Recommended tools:** 
   - TinyPNG (https://tinypng.com) - Excellent PNG compression
   - ImageOptim (Mac) - Batch compression
   - Squoosh (https://squoosh.app) - Online image optimizer
6. **Maintain aspect ratio** when resizing to avoid distortion
7. **Consider transparency** where appropriate (logos, product shots)

## Free Stock Photo Resources

If you need temporary images while arranging professional photography:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

Search terms:
- "sustainable paper"
- "agricultural residue"
- "eco-friendly packaging"
- "textile recycling"
- "biomass"
- "green manufacturing"

## Need Help?

If images don't display:
1. Check file names match exactly (case-sensitive)
2. Verify images are in correct folders
3. Check file extensions (.jpg not .jpeg)
4. Clear browser cache and refresh
5. Check browser console for errors (F12)
