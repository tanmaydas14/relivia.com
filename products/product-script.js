/* ============================================
   PRODUCT PAGE JAVASCRIPT
   Image gallery, form handling, file uploads
   ============================================ */

// ============================================
// IMAGE GALLERY
// ============================================
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Update main image
        mainImage.src = this.src;
        mainImage.alt = this.alt;
    });
});

// ============================================
// FILE UPLOAD HANDLING
// ============================================
const fileInput = document.getElementById('customDesign');
const uploadArea = document.getElementById('uploadArea');
const fileList = document.getElementById('fileList');
let uploadedFiles = [];

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight drop area when dragging over it
['dragenter', 'dragover'].forEach(eventName => {
    uploadArea.addEventListener(eventName, () => {
        uploadArea.classList.add('drag-over');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, () => {
        uploadArea.classList.remove('drag-over');
    }, false);
});

// Handle dropped files
uploadArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}, false);

// Handle selected files
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

function handleFiles(files) {
    [...files].forEach(file => {
        // Check file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            alert(`File "${file.name}" is too large. Maximum size is 10MB.`);
            return;
        }
        
        uploadedFiles.push(file);
        displayFile(file);
    });
}

function displayFile(file) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    
    const fileInfo = document.createElement('div');
    fileInfo.className = 'file-info';
    
    const icon = document.createElement('i');
    icon.className = getFileIcon(file.type);
    
    const fileName = document.createElement('span');
    fileName.className = 'file-name';
    fileName.textContent = file.name;
    
    const fileSize = document.createElement('span');
    fileSize.className = 'file-size';
    fileSize.textContent = `(${formatFileSize(file.size)})`;
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'file-remove';
    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
    removeBtn.onclick = () => removeFile(file, fileItem);
    
    fileInfo.appendChild(icon);
    fileInfo.appendChild(fileName);
    fileInfo.appendChild(fileSize);
    
    fileItem.appendChild(fileInfo);
    fileItem.appendChild(removeBtn);
    
    fileList.appendChild(fileItem);
}

function removeFile(file, fileItem) {
    uploadedFiles = uploadedFiles.filter(f => f !== file);
    fileItem.remove();
}

function getFileIcon(fileType) {
    if (fileType.startsWith('image/')) return 'fas fa-image';
    if (fileType === 'application/pdf') return 'fas fa-file-pdf';
    if (fileType.includes('illustrator')) return 'fas fa-file-image';
    return 'fas fa-file';
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// ============================================
// PRICE CALCULATION
// ============================================
let quantityInput;
let basePriceElement;
let displayQuantityElement;
let totalPriceElement;
let basePrice = 0;

// Customization fees
const CUSTOMIZATION_FEES = {
    logo: 1,    // ₹1 per item for logo printing
    design: 5   // ₹5 per item for custom design
};

function initializePriceCalculation() {
    quantityInput = document.getElementById('quantity');
    basePriceElement = document.getElementById('basePrice');
    displayQuantityElement = document.getElementById('displayQuantity');
    totalPriceElement = document.getElementById('totalPrice');
    
    // Check if elements exist
    if (!basePriceElement || !quantityInput) {
        console.warn('Price calculation elements not found');
        return false;
    }
    
    // Get base price from the page (remove ₹ symbol and convert to number)
    basePrice = parseFloat(basePriceElement.textContent.replace('₹', '').replace(',', ''));
    return true;
}

function updatePrice() {
    if (!quantityInput || !totalPriceElement) return;
    
    const quantity = parseInt(quantityInput.value) || 0;
    let total = basePrice * quantity;
    let customizationFee = 0;
    
    // Check for customization options
    const brandingSelect = document.getElementById('branding');
    const printingSelect = document.getElementById('printing');
    
    // Check branding selection (for cups/bowls)
    if (brandingSelect) {
        if (brandingSelect.value === 'logo') {
            customizationFee += CUSTOMIZATION_FEES.logo * quantity;
        } else if (brandingSelect.value === 'full-custom') {
            customizationFee += CUSTOMIZATION_FEES.design * quantity;
        }
    }
    
    // Check printing selection (for paper bags)
    if (printingSelect) {
        if (printingSelect.value === 'single-color') {
            customizationFee += CUSTOMIZATION_FEES.logo * quantity;
        } else if (['multi-color', 'full-coverage'].includes(printingSelect.value)) {
            customizationFee += CUSTOMIZATION_FEES.design * quantity;
        }
    }
    
    // Add customization fee to total
    total += customizationFee;
    
    // Update display with smooth animation
    if (displayQuantityElement) {
        displayQuantityElement.style.transition = 'all 0.3s ease';
        displayQuantityElement.textContent = formatQuantity(quantity);
    }
    
    if (totalPriceElement) {
        totalPriceElement.style.transition = 'all 0.3s ease';
        totalPriceElement.style.transform = 'scale(1.05)';
        
        // Update price display with breakdown
        let priceHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Base Price (${quantity} × ₹${basePrice}):</span>
                <span>₹${formatNumber(basePrice * quantity)}</span>
            </div>
        `;
        
        if (customizationFee > 0) {
            priceHTML += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px; color: #f8f9fa;">
                    <span>Customization Fee:</span>
                    <span>+ ₹${formatNumber(customizationFee)}</span>
                </div>
            `;
        }
        
        priceHTML += `
            <div style="display: flex; justify-content: space-between; margin-top: 10px; font-weight: bold; font-size: 1.1em;">
                <span>Total:</span>
                <span>₹${formatNumber(total)}</span>
            </div>
        `;
        
        totalPriceElement.innerHTML = priceHTML;
        
        setTimeout(() => {
            totalPriceElement.style.transform = 'scale(1)';
        }, 300);
    }
}

function formatQuantity(qty) {
    const unit = getQuantityUnit();
    return `${formatNumber(qty)} ${unit}`;
}

function getQuantityUnit() {
    // Determine unit based on page
    const title = document.querySelector('.product-title').textContent.toLowerCase();
    const qty = parseInt(quantityInput.value) || 0;
    
    if (title.includes('cup') || title.includes('bowl')) {
        return qty > 1 ? 'packs' : 'pack';
    } else if (title.includes('pencil')) {
        return qty > 1 ? 'pencils' : 'pencil';
    } else if (title.includes('paper') && title.includes('bag')) {
        return qty > 1 ? 'bags' : 'bag';
    } else if (title.includes('cloth') && title.includes('bag')) {
        return qty > 1 ? 'bags' : 'bag';
    } else if (title.includes('pulping')) {
        return 'kg';
    } else if (title.includes('wrap') || title.includes('honeycomb')) {
        return qty > 1 ? 'rolls' : 'roll';
    }
    return 'units';
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Update price when quantity changes
function setupPriceListeners() {
    if (quantityInput) {
        // Update on input (real-time)
        quantityInput.addEventListener('input', updatePrice);
        
        // Update on change (when user clicks arrows or types)
        quantityInput.addEventListener('change', updatePrice);
        
        // Initial calculation
        updatePrice();
    }

    // Update price when any form field changes
    const form = document.querySelector('.order-form');
    if (form) {
        // Listen to all input and change events on the form
        form.addEventListener('input', updatePrice);
        form.addEventListener('change', updatePrice);
    }
}

// ============================================
// FORM SUBMISSION
// ============================================
function setupFormSubmission() {
    const orderForm = document.getElementById('orderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
        
        // Collect form data
        const formData = new FormData(orderForm);
        
        // Add uploaded files
        uploadedFiles.forEach((file, index) => {
            formData.append(`file${index}`, file);
        });
        
        // Create order object
        const orderData = {
            product: document.querySelector('.product-title').textContent,
            quantity: formData.get('quantity'),
            customerName: formData.get('customerName'),
            customerEmail: formData.get('customerEmail'),
            customerPhone: formData.get('customerPhone'),
            deliveryAddress: formData.get('deliveryAddress'),
            specialNotes: formData.get('specialNotes'),
            estimatedTotal: totalPriceElement.textContent,
            files: uploadedFiles.map(f => f.name),
            timestamp: new Date().toISOString()
        };
        
        // Add all form fields to orderData
        for (let [key, value] of formData.entries()) {
            if (!orderData[key] && !key.startsWith('file')) {
                orderData[key] = value;
            }
        }
        
        console.log('Order submitted:', orderData);
        
        // Show success message
        alert('Thank you for your interest! We will review your requirements and send you a detailed quote within 24 hours.');
        
        // Reset form
        orderForm.reset();
        uploadedFiles = [];
        fileList.innerHTML = '';
        updatePrice();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        /* 
        DEPLOYMENT NOTE: To make this form functional, you need to:
        1. Set up a backend service to handle form submissions
        2. Options include:
           - Netlify Forms (if deploying to Netlify)
           - FormSpree (https://formspree.io)
           - EmailJS (https://www.emailjs.com)
           - Your own backend API
        
        Example with Netlify Forms:
        - Add data-netlify="true" to the form tag
        - Add a hidden input: <input type="hidden" name="form-name" value="order-form" />
        - Netlify will handle the submission automatically
        
        Example with FormSpree:
        - Sign up and get your form endpoint
        - Use fetch API to send data:
        
        fetch('https://formspree.io/f/YOUR_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Order submitted successfully!');
        })
        .catch(error => {
            alert('There was an error submitting your order. Please try again.');
        });
        */
        });
    }
}

// ============================================
// SMOOTH ANIMATIONS
// ============================================
// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe order section
const orderSection = document.querySelector('.order-section');
if (orderSection) {
    orderSection.style.opacity = '0';
    orderSection.style.transform = 'translateY(30px)';
    orderSection.style.transition = 'all 0.6s ease';
    fadeObserver.observe(orderSection);
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Product page loaded successfully!');
    
    // Initialize price calculation
    if (initializePriceCalculation()) {
        setupPriceListeners();
        updatePrice();
    }
    
    // Setup form submission
    setupFormSubmission();
});
