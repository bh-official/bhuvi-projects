***Accessible Image Gallery***

**Live Links**

*GitHub Repository:*
https://github.com/bh-official/bhuvi-projects/tree/main/week2/12-accessible-image-gallery

*Live Deployment:*
https://bh-official.github.io/bhuvi-projects/week2/12-accessible-image-gallery/

*README File:*
https://github.com/bh-official/bhuvi-projects/blob/main/week2/12-accessible-image-gallery/README.md

**Project Overview:**
This project is an Accessible Image Gallery created for the Week 2 assignment. The purpose of the project was to demonstrate understanding of JavaScript arrays and objects, DOM manipulation, event handling, responsive design using media queries, and accessibility best practices.
The gallery allows users to view and navigate through a collection of images using buttons, thumbnails, and keyboard controls. The layout adapts automatically between desktop and mobile screen sizes.

**Features Implemented:**

•	Main image viewer with dynamic image switching

•	Caption that updates automatically when the image changes

•	All images include meaningful alt text

•	Thumbnails are generated dynamically using JavaScript

•	Next and Previous navigation buttons

•	Toggle button to show and hide the thumbnail panel

•	Keyboard navigation using Left and Right arrow keys

•	Uses srcset to load appropriate image sizes for different screen sizes

•	Uses aria-label on buttons and thumbnails

•	Uses aria-live="polite" for the caption so screen readers announce changes

•	Responsive layout using media queries


**Desktop and Mobile Behaviour:**

*Desktop View*

•	The main image is displayed on the left

•	The thumbnail panel appears on the right side

•	When the thumbnails are opened, the main image resizes to make space instead of being covered

•	The Next button and Toggle button move left so they do not overlap the thumbnails

•	Thumbnails are displayed in a vertical scrollable list


*Mobile View*

•	The layout switches using a media query

•	The thumbnail panel moves to the bottom of the screen

•	Thumbnails are displayed in a horizontal scrolling row

•	The main image always remains full width

•	Navigation buttons and toggle button stay fixed in position

•	The caption stays at the bottom of the image and adjusts position when the thumbnail bar is visible

This ensures there is a clear and noticeable difference between desktop and mobile layouts.


**Technical Implementation (JavaScript Concepts Used):**

*Arrays and Objects*

The gallery images are stored in a JavaScript array of objects. Each object represents one image and contains:

•	src – the main image source

•	srcset – responsive image sources

•	alt – alternative text for accessibility

•	caption – the text shown under the image

This makes the data easy to manage, extend, and loop through.


*Loops*

A for loop is used to:

•	Generate all thumbnail buttons dynamically

•	Attach event listeners to each thumbnail

•	Avoid hardcoding HTML elements

This makes the gallery scalable, so adding new images only requires adding a new object to the array.


*Functions*

A reusable function (showImage(index)) is used to:

•	Update the main image

•	Update the srcset

•	Update the alt text

•	Update the caption

•	Update the active thumbnail highlight

This keeps the code clean and avoids duplication.


*DOM Manipulation Methods*

The project uses several DOM methods such as:

•	document.querySelector()

•	document.getElementById()

•	document.createElement()

•	appendChild()

•	setAttribute()

•	classList.add() / classList.remove()

These are used to dynamically build the gallery and update the UI based on user actions.


*Events*

The project uses multiple event listeners:

•	click events for buttons and thumbnails

•	keydown events for keyboard navigation

•	Toggle button click to show/hide thumbnails

This makes the gallery fully interactive and accessible using both mouse and keyboard.


*Accessibility Considerations*

•	All images include meaningful alt text

•	Buttons and thumbnails use aria-label

•	Caption uses aria-live="polite" so screen readers announce changes

•	The gallery can be navigated using the keyboard arrow keys

•	UI elements are large and clear for easy interaction


**Requirements Checklist:**


*Required Requirements*

•	Responsive design for desktop and mobile screens: Achieved

•	Noticeable layout change using a media query: Achieved

•	All images include alt text: Achieved

•	Event handlers used to switch images: Achieved


*Stretch Requirements*

•	Uses srcset for responsive images: Achieved

•	Uses ARIA attributes for accessibility: Achieved

•	Supports keyboard navigation using arrow keys: Achieved


**Reflection:**


*What requirements did you achieve?*

I achieved all the required features including responsive layout, dynamic image switching using JavaScript, accessible alt text, and a clear layout change between desktop and mobile views. I also completed all stretch goals by adding srcset, ARIA attributes, and keyboard navigation.


*Were there any requirements you were unable to achieve?*

No. All core and stretch requirements were implemented.


*What challenges did you face and how did you solve them?*

The main challenges were related to layout and responsiveness.

One major difficulty was making the thumbnail panel behave differently on desktop and mobile without breaking the layout. Initially, the thumbnails were overlapping the image or leaving empty space on some screen sizes. I solved this by separating the desktop and mobile layout rules clearly using media queries and changing how the main image container resizes on desktop.

Another challenge was making the Next button and Toggle button move only in desktop view when the thumbnails are visible, but stay fixed in mobile view. At first, the buttons were moving in both layouts. I fixed this by using body classes such as thumbs-open and thumbs-closed and overriding those rules inside the mobile media query.

I also faced issues where changes were not appearing in the browser due to development server and caching problems. Restarting VS Code and reloading the server solved this.

A lot of time was spent debugging CSS issues related to flexbox, absolute positioning, transforms, overflow, and media query overrides.


*What went well?*

•	The JavaScript gallery logic using arrays and objects worked well

•	Keyboard navigation was easy to add once the main logic worked

•	The final layout looks clean and professional

•	The gallery works well on both desktop and mobile devices


*What could have gone better?*

•   I tested and designed the gallery for mobile phones and laptops, and it works well on those screen sizes. Because of limited time, I did not fully adjust the layout for tablet screen sizes. As a result, the thumbnail scrolling does not work properly on some tablet sizes. If I had more time, I would add a separate layout for tablets and fix the scrolling and spacing issues.

•	More animations or loading indicators could be added


**Conclusion:**

This project helped me understand how to combine JavaScript logic, arrays, objects, loops, functions, DOM manipulation, responsive CSS, and accessibility features into a single working application. It also taught me how to debug complex layout issues and think carefully about how different screen sizes affect UI behaviour.
