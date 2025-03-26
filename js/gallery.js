document.addEventListener('DOMContentLoaded', () => {

    const backToTopButton = document.getElementById('backToTop');

    // Show the button when the user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Check if the user has scrolled down at all
            backToTopButton.classList.add('visible'); // Show button with fade-in effect
            backToTopButton.classList.remove('hidden'); // Remove hidden class
        } else {
            backToTopButton.classList.remove('visible'); // Fade-out effect
            backToTopButton.classList.add('hidden'); // Add hidden class
        }
    });

    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');

// Function to ensure the nav menu is visible for larger screens
const ensureNavVisible = () => {
  if (window.innerWidth > 767) {
    navMenu.style.display = 'flex'; // Show nav menu
    navOpenBtn.style.display = 'none'; // Hide open button
    navCloseBtn.style.display = 'none'; // Hide close button
  }
};

// Function to open the navigation menu
const openNavHandler = () => {
  navMenu.style.display = 'flex';
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block';
};

// Function to close the navigation menu
const closeNavHandler = () => {
  navMenu.style.display = 'none';
  navOpenBtn.style.display = 'inline-block';
  navCloseBtn.style.display = 'none';
};

 // Close nav menu on click
 const navItems = navMenu.querySelectorAll('a');
 if (window.innerWidth < 769) {
   navItems.forEach(item => {
     item.addEventListener('click', closeNavHandler);
   });
 }

 // Close the nav menu when clicking outside of it, only on small screens
 document.addEventListener('click', (event) => {
  const isClickInsideNavMenu = navMenu.contains(event.target);
  const isClickInsideNavButton = navOpenBtn.contains(event.target) || navCloseBtn.contains(event.target);

  // Closes the nav menu if the click is outside of the nav menu and buttons, only for small screens
  if (!isClickInsideNavMenu && !isClickInsideNavButton && window.innerWidth <= 768) {
    closeNavHandler();
  }
});


// Event listeners for the open/close buttons
navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);



// Function to handle screen resizing
const handleResize = () => {
  if (window.innerWidth <= 768) {
    navMenu.style.display = 'none'; // Hide nav menu for smaller screens
    navOpenBtn.style.display = 'inline-block'; // Show open button
    navCloseBtn.style.display = 'none'; // Hide close button
  } else {
    // Reset navbar for smaller screens
    ensureNavVisible();
  }
};

// Event listener for screen resizing
window.addEventListener('resize', handleResize);

// Initial check to set the correct state on load
handleResize();

const galleryImages = document.querySelectorAll("#gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
let startX = 0;

// Open lightbox
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
        lightbox.style.display = "flex";
    });
});

// Show selected image
function showImage(index) {
    lightboxImg.src = galleryImages[index].src;
}

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Swipe functionality
lightboxImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

lightboxImg.addEventListener("touchmove", (e) => {
    let moveX = e.touches[0].clientX;
    let diff = startX - moveX;

    if (diff > 50) {
        nextImage(); // Swipe left to go forward
    } else if (diff < -50) {
        prevImage(); // Swipe right to go back
    }
});

// Arrow Clicks
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") {
            nextImage();
        } else if (e.key === "ArrowLeft") {
            prevImage();
        } else if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});

});

