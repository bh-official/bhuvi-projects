
const image=document.querySelector('img');
const imageCaption=document.querySelector('figcaption');

const thumbnailsContainer = document.getElementById("thumbnails");
let currentIndex=0;

const toggleBtn = document.getElementById("toggle-thumbs");

// setting the thumbanail as hidden during the start of the website
let thumbsVisible = false;
thumbnailsContainer.classList.add("hidden");
document.body.classList.add("thumbs-closed");
toggleBtn.textContent = "☰";


// to toggle the thumbnails during the click
toggleBtn.addEventListener("click", function() {
    thumbsVisible = !thumbsVisible;

    if (thumbsVisible) {
        thumbnailsContainer.classList.remove("hidden");
        toggleBtn.textContent = "✕"; 
        document.body.classList.remove("thumbs-closed");
        document.body.classList.add("thumbs-open");
    } else {
        thumbnailsContainer.classList.add("hidden");
        toggleBtn.textContent = "☰";
        document.body.classList.remove("thumbs-open");
        document.body.classList.add("thumbs-closed");
    }
    console.log(document.body.className);
});

// creating the image gallery along with srcset(Stretch goals), alt and caption
const galleryImages = [
    {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "A river flowing through a forested valley with mountains in the background at sunset",
    caption: "A peaceful mountain valley at sunset"
    },

    {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "A field of orange flowers growing in tall grass against a bright sky",
    caption: "A field of little orange flowers"
    },

    {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "The sun rising over layered mountain silhouettes with warm light",
    caption: "Sunrise over distant mountains"
    },

    {
    src: "https://images.unsplash.com/photo-1768236360390-7ebed78c96b7?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1768236360390-7ebed78c96b7?w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1768236360390-7ebed78c96b7?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "Frost-covered berries and leaves on a branch in winter",
    caption: "Frost-covered berries in winter"
    },

    {
    src: "https://images.unsplash.com/photo-1767978918940-3772a9a61cc7?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1767978918940-3772a9a61cc7?w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1767978918940-3772a9a61cc7?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "Snow-covered pine trees in a dense winter forest",
    caption: "Snowy forest landscape"
    },

    {
    src: "https://images.unsplash.com/photo-1767337962049-19cc90b600aa?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1767337962049-19cc90b600aa?w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1767337962049-19cc90b600aa?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "Two pelicans standing near water with other birds in the background",
    caption: "Pelicans by the shoreline"
    },

    {
    src: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    srcset: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "A river flowing through a landscape of pink flowering trees and grass",
    caption: "Spring landscape with flowering trees"
    },

    {
    src: "https://images.unsplash.com/photo-1768124362690-2dceeda5e0d0?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1768124362690-2dceeda5e0d0?w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1768124362690-2dceeda5e0d0?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "A butterfly resting on a fluffy flower against a green background",
    caption: "Butterfly on a wild flower"
    },

    {
    src: "https://images.unsplash.com/photo-1767786605468-3704cb130e3d?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1767786605468-3704cb130e3d?w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1767786605468-3704cb130e3d?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "A bee collecting pollen from a purple flower in close-up view",
    caption: "Bee pollinating a flower"
    },

    {
    src: "https://images.unsplash.com/photo-1764484636506-cf6398999671?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    srcset: "https://images.unsplash.com/photo-1764484636506-cf6398999671?w=600&auto=format&fit=crop&ixlib=rb-4.1.0 600w, https://images.unsplash.com/photo-1764484636506-cf6398999671?w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w",
    alt: "Sunflowers in a field glowing in warm sunlight during sunset",
    caption: "Sunflowers at sunset"
    }
];




function showImage(index) {
    image.src = galleryImages[index].src;
    image.srcset = galleryImages[index].srcset; 
    image.alt = galleryImages[index].alt;
    imageCaption.textContent = galleryImages[index].caption;

    const buttons = document.querySelectorAll("#thumbnails button");

    // remove "active" from all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // add "active" to the current button
    buttons[index].classList.add("active");

    if (thumbsVisible) {
        buttons[index].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });
    }
}


// Appending thumbnail images by checking the conditions and while the thumbnail button is clicked we are invoking the showImage fn() by passing the current index as the arguement

for (let index = 0; index < galleryImages.length; index++) {
    const imgData = galleryImages[index];

    const button = document.createElement('button');
    const thumbImage = document.createElement('img');

    thumbImage.src = imgData.src;
    thumbImage.alt = imgData.alt;

    button.setAttribute("aria-label", "View image " + (index + 1));

    button.appendChild(thumbImage);
    thumbnailsContainer.appendChild(button);

    button.addEventListener('click', function () {
        currentIndex = index;
        showImage(currentIndex);
    });
}


// Previous and Next button
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    showImage(currentIndex);
});

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});


// Keyboard front and back arrows
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        currentIndex++;
        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    if (e.key === "ArrowLeft") {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }
        showImage(currentIndex);
    }
});

// to show the first image 
showImage(0);







  
