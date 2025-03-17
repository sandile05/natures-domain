document.addEventListener('DOMContentLoaded', () => {

  const backToTopButton = document.getElementById('backToTop');
  const exploreSection = document.getElementById('quote');

  // Show the button when the user scrolls past the explore section
  window.addEventListener('scroll', () => {
    const sectionRect = exploreSection.getBoundingClientRect();
    if (sectionRect.bottom < window.innerHeight) {
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

  const h1Words = document.querySelectorAll('.swap');
  const pTag = document.querySelector('.typewriter');

  let loopCount = 0;

  function swapWords() {
    // First word goes up, second word goes down
    h1Words[0].classList.add('switched-up');
    h1Words[1].classList.add('switched-down');

    setTimeout(() => {
      // Switch back to original position
      h1Words[0].classList.remove('switched-up');
      h1Words[1].classList.remove('switched-down');
    }, 1800); // Duration of the transition
  }

  function startAnimationLoop() {
    setTimeout(() => {
      swapWords();

      setTimeout(() => {
        swapWords(); // Switch back

        loopCount++;
        if (loopCount < 2) {
          startAnimationLoop(); // Repeat the loop
        } else {
          pTag.classList.remove('typewriter'); // End with p tag visible
        }
      }, 1200); // Delay before switching back
    }, 1200); // Delay to sync with typewriter animation
  }

startAnimationLoop();

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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2300, // Time in milliseconds
    disableOnInteraction: false, // Keeps autoplay active even after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperBlogPreview = new Swiper('.swiper-blog-preview', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false, // Stop looping,
  navigation: {
    nextEl: '.swiper-button-next-blog',
    prevEl: '.swiper-button-prev-blog',
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
  },
  600: {
      slidesPerView: 3,
      spaceBetween: 15,
  },
  1024: {
      slidesPerView: 4,
      spaceBetween: 20,
  },
  },
  on: {
    init: function () {
      updateNavigationButtons(this);
    },
    slideChange: function () {
      updateNavigationButtons(this);
    },
  },
});

// Function to disable navigation buttons at the ends
function updateNavigationButtons(swiper) {
  const prevButton = swiper.navigation.prevEl;
  const nextButton = swiper.navigation.nextEl;

  if (swiper.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
  } else {
    nextButton.classList.remove('swiper-button-disabled');
  }
}


});





