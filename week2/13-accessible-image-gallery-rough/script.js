console.log("Accessible Image Gallery Script Loaded");

const images = [
  {
    src: "https://picsum.photos/id/1015/800/500",
    thumb: "https://picsum.photos/id/1015/200/120",
    alt: "Mountain landscape with trees"
  },
  {
    src: "https://picsum.photos/id/1025/800/500",
    thumb: "https://picsum.photos/id/1025/200/120",
    alt: "Dog looking at the camera"
  },
  {
    src: "https://picsum.photos/id/1035/800/500",
    thumb: "https://picsum.photos/id/1035/200/120",
    alt: "River flowing through rocks"
  },
  {
    src: "https://picsum.photos/id/1041/800/500",
    thumb: "https://picsum.photos/id/1041/200/120",
    alt: "Beach with clear blue water"
  }
];

const mainImage = document.getElementById("mainImage");
const thumbnailBar = document.getElementById("thumbnailBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Create thumbnails
images.forEach((image, index) => {
  const img = document.createElement("img");
  img.src = image.thumb;
  img.alt = image.alt;
  img.tabIndex = 0; // makes it focusable by keyboard

  if (index === 0) {
    img.classList.add("active");
  }

  img.addEventListener("click", () => {
    showImage(index);
  });

  img.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      showImage(index);
    }
  });

  thumbnailBar.appendChild(img);
});

function showImage(index) {
  currentIndex = index;
  mainImage.src = images[index].src;
  mainImage.alt = images[index].alt;

  document.querySelectorAll(".thumbnails img").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

// Buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Keyboard navigation with arrow keys
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});
