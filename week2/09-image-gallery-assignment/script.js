/**
 * Accessible Image Gallery - JavaScript
 * 
 * Features:
 * - Image switching via thumbnails and navigation buttons
 * - Keyboard navigation with arrow keys
 * - ARIA live region updates for screen readers
 * - Proper focus management
 */

// ========================================
// Image Data - Array of Objects
// ========================================
const galleryImages = [
    {
        src: 'images/mountain_sunrise_1768253022020.png',
        alt: 'Snow-capped mountain peaks at sunrise with crystal clear alpine lake reflecting the mountains and golden morning light',
        title: 'Mountain Sunrise'
    },
    {
        src: 'images/tropical_sunset_1768253036255.png',
        alt: 'Serene tropical beach at sunset with palm trees silhouetted against vibrant orange and pink sky, gentle waves on white sand',
        title: 'Tropical Sunset'
    },
    {
        src: 'images/forest_sunlight_1768253050679.png',
        alt: 'Lush green forest with sunlight streaming through tall trees creating magical light rays, moss-covered ground with autumn colors',
        title: 'Forest Sunlight'
    },
    {
        src: 'images/coastal_cliffs_1768253063225.png',
        alt: 'Dramatic ocean cliff coastline with crashing waves against rocky shores, lighthouse in the distance under stormy sky',
        title: 'Coastal Cliffs'
    },
    {
        src: 'images/lavender_field_1768253075916.png',
        alt: 'Beautiful lavender field at golden hour with rows of purple flowers stretching to the horizon, warm sunset light with cypress trees',
        title: 'Lavender Fields'
    },
    {
        src: 'images/desert_night_1768253090739.png',
        alt: 'Stunning desert landscape at night with milky way galaxy visible in dark sky, red rock formations under dramatic starscape',
        title: 'Desert Night Sky'
    }
];

// ========================================
// State Management
// ========================================
let currentIndex = 0;

// ========================================
// DOM Elements
// ========================================
const mainImage = document.getElementById('main-image');
const imageTitle = document.getElementById('image-title');
const imageCounter = document.getElementById('image-counter');
const galleryStatus = document.getElementById('gallery-status');
const thumbnailList = document.getElementById('thumbnail-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// ========================================
// Core Functions
// ========================================

/**
 * Updates the main gallery image display
 * @param {number} index - The index of the image to display
 */
function updateMainImage(index) {
    const image = galleryImages[index];

    // Update main image
    mainImage.src = image.src;
    mainImage.alt = image.alt;

    // Update caption
    imageTitle.textContent = image.title;
    imageCounter.textContent = `${index + 1} of ${galleryImages.length}`;

    // Update active thumbnail
    updateActiveThumbnail(index);

    // Announce change to screen readers via ARIA live region
    announceImageChange(image.title, index);

    // Update current index
    currentIndex = index;
}

/**
 * Updates the active state on thumbnails
 * @param {number} activeIndex - The index of the active thumbnail
 */
function updateActiveThumbnail(activeIndex) {
    const thumbnails = thumbnailList.querySelectorAll('.thumbnail-btn');

    thumbnails.forEach((thumb, index) => {
        if (index === activeIndex) {
            thumb.classList.add('active');
            thumb.setAttribute('aria-current', 'true');
        } else {
            thumb.classList.remove('active');
            thumb.removeAttribute('aria-current');
        }
    });
}

/**
 * Announces image changes to screen readers
 * @param {string} title - The title of the current image
 * @param {number} index - The current image index
 */
function announceImageChange(title, index) {
    galleryStatus.textContent = `Now viewing ${title}, image ${index + 1} of ${galleryImages.length}`;
}

/**
 * Navigates to the previous image
 */
function goToPrevious() {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    updateMainImage(newIndex);
}

/**
 * Navigates to the next image
 */
function goToNext() {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    updateMainImage(newIndex);
}

/**
 * Generates thumbnail buttons dynamically
 */
function generateThumbnails() {
    thumbnailList.innerHTML = '';

    galleryImages.forEach((image, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'thumbnail-item';

        const button = document.createElement('button');
        button.className = 'thumbnail-btn';
        button.type = 'button';
        button.setAttribute('aria-label', `View ${image.title}`);

        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        }

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = ''; // Decorative, label on button
        img.loading = 'lazy';

        button.appendChild(img);

        // Click handler for thumbnail
        button.addEventListener('click', () => {
            updateMainImage(index);
        });

        listItem.appendChild(button);
        thumbnailList.appendChild(listItem);
    });
}

// ========================================
// Event Listeners
// ========================================

/**
 * Initialize event listeners
 */
function initEventListeners() {
    // Previous button click
    prevBtn.addEventListener('click', goToPrevious);

    // Next button click
    nextBtn.addEventListener('click', goToNext);

    // Keyboard navigation - Arrow keys
    document.addEventListener('keydown', handleKeyboardNavigation);
}

/**
 * Handles keyboard navigation
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleKeyboardNavigation(event) {
    // Only handle if not typing in an input field
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }

    switch (event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            goToPrevious();
            break;
        case 'ArrowRight':
            event.preventDefault();
            goToNext();
            break;
        case 'Home':
            event.preventDefault();
            updateMainImage(0);
            break;
        case 'End':
            event.preventDefault();
            updateMainImage(galleryImages.length - 1);
            break;
    }
}

// ========================================
// Initialization
// ========================================

/**
 * Initialize the gallery when DOM is ready
 */
function initGallery() {
    generateThumbnails();
    initEventListeners();

    // Initial announcement for screen readers
    galleryStatus.textContent = `Image gallery with ${galleryImages.length} images. Currently viewing ${galleryImages[0].title}.`;

    console.log('🖼️ Accessible Image Gallery initialized');
    console.log(`📸 ${galleryImages.length} images loaded`);
    console.log('⌨️ Use arrow keys to navigate');
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);
