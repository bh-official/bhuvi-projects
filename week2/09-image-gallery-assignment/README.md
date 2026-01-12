# Nature's Canvas - Accessible Image Gallery

An accessible, responsive image gallery showcasing stunning nature photography. Built with web accessibility and responsive design as core principles.

![Gallery Preview](images/mountain_sunrise_1768253022020.png)

## 🌟 Features

- **Responsive Design** - Mobile-first approach with layout changes at 800px breakpoint
- **Full Keyboard Navigation** - Arrow keys, Home, and End keys to navigate
- **Screen Reader Support** - ARIA live regions announce image changes
- **Touch-Friendly** - Swipe-friendly thumbnail scrolling on mobile
- **Dark Theme** - Modern, premium aesthetic with gradient accents

## 🚀 Live Demo

[View Live Demo](https://[username].github.io/09-image-gallery-assignment/)

## 🎯 Assignment Reflection

### Requirements Achieved

| Requirement | Status |
|-------------|--------|
| Responsive design for mobile and desktop (800px+) | ✅ |
| Meaningful media query with noticeable change | ✅ |
| All images have appropriate alt text | ✅ |
| Event handlers for switching images | ✅ |

### Stretch Goals Achieved

| Stretch Goal | Status |
|--------------|--------|
| Keyboard navigation with arrow keys | ✅ |
| ARIA elements (aria-live, aria-label, aria-current) | ✅ |
| High contrast and reduced motion support | ✅ |

### What I Built

1. **HTML Structure**
   - Semantic HTML5 with `<main>`, `<header>`, `<nav>`, `<figure>`
   - Skip link for keyboard users
   - ARIA live region for screen reader announcements
   - All interactive elements are keyboard accessible

2. **CSS Features**
   - Mobile-first responsive design
   - Media query at 800px changes thumbnail layout (horizontal scroll on mobile → centered wrap on desktop)
   - CSS custom properties for consistent theming
   - Focus indicators that meet WCAG contrast requirements
   - `prefers-reduced-motion` and `prefers-contrast` media queries

3. **JavaScript Functionality**
   - Image data stored as array of objects
   - Dynamic thumbnail generation using DOM methods
   - Click and keyboard event handlers
   - Arrow key navigation (Left/Right to navigate, Home/End for first/last)
   - ARIA live announcements update on image change

### Challenges Faced

No major challenges were encountered. The key considerations were:
- Ensuring thumbnail scrolling worked well on mobile while looking good on desktop
- Making focus states visible without disrupting the design aesthetic
- Properly implementing ARIA live regions so screen readers announce changes

### External Resources

- [MDN Web Docs - ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [W3C WAI - Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Media Queries)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| < 600px | Compact thumbnails, minimal nav buttons |
| 600px - 799px | Larger thumbnails, full button text |
| ≥ 800px | Thumbnails wrap centered, larger main image |
| ≥ 1200px | Maximum gallery width, largest thumbnails |

## ♿ Accessibility Features

- **Skip Link** - Jump directly to main content
- **Keyboard Navigation** - Full gallery control without mouse
- **Screen Reader** - ARIA live announcements for image changes
- **Focus Indicators** - High contrast focus rings
- **Alt Text** - Descriptive alternative text for all images
- **Reduced Motion** - Respects user motion preferences
- **High Contrast** - Enhanced borders in high contrast mode

## 📂 Project Structure

```
09-image-gallery-assignment/
├── index.html          # Main HTML with semantic structure
├── style.css           # Responsive styles with media queries
├── script.js           # Gallery interactivity and accessibility
├── images/             # Gallery images
│   ├── mountain_sunrise_*.png
│   ├── tropical_sunset_*.png
│   ├── forest_sunlight_*.png
│   ├── coastal_cliffs_*.png
│   ├── lavender_field_*.png
│   └── desert_night_*.png
└── README.md           # This file
```

## 📜 License

This project was created for educational purposes as part of a web development assignment.
