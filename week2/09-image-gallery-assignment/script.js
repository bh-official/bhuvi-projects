/**
 * Accessible Image Gallery - JavaScript
 * 
 * Features:
 * - Image switching via thumbnails and navigation buttons
 * - Keyboard navigation with arrow keys
 * - ARIA live region updates for screen readers
 * - Smooth fade transitions
 * - Touch swipe gestures for mobile
 * - Fullscreen lightbox mode
 * - Loading skeleton animations
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
let isTransitioning = false;
let lightboxOpen = false;

// Touch gesture state
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50;

// ========================================
// DOM Elements
// ========================================
const mainImage = document.getElementById('main-image');
const mainImageContainer = document.getElementById('main-image-container');
const imageTitle = document.getElementById('image-title');
const imageCounter = document.getElementById('image-counter');
const galleryStatus = document.getElementById('gallery-status');
const thumbnailList = document.getElementById('thumbnail-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const skeletonLoader = document.getElementById('skeleton-loader');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// ========================================
// Loading & Skeleton Functions
// ========================================

/**
 * Shows the loading skeleton
 */
function showSkeleton() {
    skeletonLoader.classList.remove('hidden');
}

/**
 * Hides the loading skeleton
 */
function hideSkeleton() {
    skeletonLoader.classList.add('hidden');
}

/**
 * Preloads an image and returns a promise
 * @param {string} src - Image source URL
 * @returns {Promise}
 */
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
    });
}

// ========================================
// Core Functions
// ========================================

/**
 * Updates the main gallery image display with fade transition
 * @param {number} index - The index of the image to display
 */
async function updateMainImage(index) {
    if (isTransitioning || index === currentIndex) return;

    isTransitioning = true;
    const image = galleryImages[index];

    // Fade out current image
    mainImage.classList.add('fade-out');
    showSkeleton();

    // Wait for fade out
    await new Promise(resolve => setTimeout(resolve, 250));

    // Preload new image
    try {
        await preloadImage(image.src);
    } catch (error) {
        console.error('Failed to load image:', error);
    }

    // Update main image
    mainImage.src = image.src;
    mainImage.alt = image.alt;

    // Update caption
    imageTitle.textContent = image.title;
    imageCounter.textContent = `${index + 1} of ${galleryImages.length}`;

    // Update active thumbnail
    updateActiveThumbnail(index);

    // Announce change to screen readers
    announceImageChange(image.title, index);

    // Update current index
    currentIndex = index;

    // Fade in new image
    hideSkeleton();
    mainImage.classList.remove('fade-out');
    mainImage.classList.add('fade-in');

    // Clean up transition class
    setTimeout(() => {
        mainImage.classList.remove('fade-in');
        isTransitioning = false;
    }, 250);

    // Update lightbox if open
    if (lightboxOpen) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.title;
    }
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
// Lightbox Functions
// ========================================

/**
 * Opens the lightbox modal
 */
function openLightbox() {
    const image = galleryImages[currentIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.title;

    lightbox.hidden = false;
    lightboxOpen = true;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    setTimeout(() => lightboxClose.focus(), 100);

    // Announce to screen readers
    galleryStatus.textContent = `Lightbox opened. Viewing ${image.title} in fullscreen.`;
}

/**
 * Closes the lightbox modal
 */
function closeLightbox() {
    lightbox.hidden = true;
    lightboxOpen = false;

    // Restore body scroll
    document.body.style.overflow = '';

    // Return focus to fullscreen button
    fullscreenBtn.focus();

    // Announce to screen readers
    galleryStatus.textContent = 'Lightbox closed.';
}

// ========================================
// Touch/Swipe Gesture Functions
// ========================================

/**
 * Handles touch start event
 * @param {TouchEvent} event
 */
function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

/**
 * Handles touch end event and determines swipe direction
 * @param {TouchEvent} event
 */
function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}

/**
 * Processes the swipe gesture
 */
function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
        if (swipeDistance > 0) {
            // Swiped right - go to previous
            goToPrevious();
        } else {
            // Swiped left - go to next
            goToNext();
        }
    }
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

    // Fullscreen button
    fullscreenBtn.addEventListener('click', openLightbox);

    // Main image click opens lightbox
    mainImage.addEventListener('click', openLightbox);
    mainImage.style.cursor = 'pointer';

    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', goToPrevious);
    lightboxNext.addEventListener('click', goToNext);

    // Close lightbox on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Touch/swipe gestures
    mainImageContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    mainImageContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Also enable swipe in lightbox
    lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
    lightbox.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Hide skeleton when first image loads
    mainImage.addEventListener('load', () => {
        hideSkeleton();
    });
}

/**
 * Handles keyboard navigation
 * @param {KeyboardEvent} event
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
        case 'Escape':
            if (lightboxOpen) {
                event.preventDefault();
                closeLightbox();
            }
            break;
        case 'f':
        case 'F':
            if (!lightboxOpen) {
                event.preventDefault();
                openLightbox();
            }
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
    galleryStatus.textContent = `Image gallery with ${galleryImages.length} images. Currently viewing ${galleryImages[0].title}. Press F for fullscreen.`;

    console.log('🖼️ Accessible Image Gallery initialized');
    console.log(`📸 ${galleryImages.length} images loaded`);
    console.log('⌨️ Keyboard shortcuts:');
    console.log('   ← → : Navigate images');
    console.log('   Home/End : First/Last image');
    console.log('   F : Open fullscreen');
    console.log('   Esc : Close fullscreen');
    console.log('👆 Touch: Swipe left/right to navigate');
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);
