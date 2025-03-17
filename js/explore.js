document.addEventListener('DOMContentLoaded', () => {

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
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
    delay: 2300, // Time in milliseconds
    disableOnInteraction: false, // Keeps autoplay active even after user interaction
  }
  });

  const swiperHorizontal = new Swiper('.swiper-horizontal', {
    spaceBetween: 20,
    loop: false, // Set to true if you want an infinite loop
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: true, // Allow dragging with touch and mouse events
    touchStartPreventDefault: false, // Disable default touch behavior (useful for mobile devices)
    breakpoints: {
        // Responsive adjustments
        380: {
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


  });

    document.querySelectorAll('.video').forEach(card => {
      const playIcon = card.querySelector('.play-icon-overlay'); // Get the play icon inside the card

      // Add event listener only to the play icon
      playIcon.onclick = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the card

        const videoSrc = card.querySelector('video').getAttribute('src'); // Get the video source
        const popup = document.querySelector('.popup-video');
        const popupVideo = popup.querySelector('video');

        popup.style.display = 'block'; // Show the popup
        popupVideo.src = videoSrc; // Set the video source in the popup
        popupVideo.play(); // Play the video
      };

      // Prevent the card from triggering the video play if it's clicked
      card.onclick = (event) => {
        if (event.target !== playIcon) { // Check if the target is not the play icon
          return; // Do nothing if the card (excluding play icon) is clicked
        }
      };
    });


    const popup = document.querySelector('.popup-video');
    const popupVideo = popup.querySelector('video');

    document.querySelector('.popup-video span').onclick = () => {
      popup.style.display = 'none';
      popupVideo.pause();
      popupVideo.src = ""; // Clear the source to reset the video
    };

      // Close the popup when clicking outside the video
      popup.addEventListener('click', function(event) {
        if (event.target === popup) {
          popup.style.display = 'none';
          popupVideo.pause();
          popupVideo.src = "";
        }
      });


      const swiperCards = new Swiper('.swiper-cards-container', {
        effect: 'cards', // Use the 'cards' effect
        grabCursor: true, // Allows the user to drag/swipe
        loop: true, // Enable loop for continuous sliding
        spaceBetween: 30, // Space between slides
        slidesPerView: 1, // Show one slide at a time
        centeredSlides: true, // Ensure the active slide is centered
        simulateTouch: true, // Enable touch/swipe events
        touchRatio: 1, // Normal touch ratio (1 for normal drag speed)
        touchAngle: 45, // Angle limit for swipe
        threshold: 15, // Distance to swipe before slide changes (higher = less sensitivity)
        pagination: {
          el: '.swiper-pagination-custom', // Custom pagination class
          clickable: true, // Make pagination clickable
        },
        navigation: {
          nextEl: '.swiper-button-next-custom', // Custom next button
          prevEl: '.swiper-button-prev-custom', // Custom previous button
        },
        speed: 500, // Increase transition speed for smoothness
        cardEffect: {
          slideShadows: false, // Disable card shadows
          rotate: 0, // Ensure no rotation to avoid shifting
        },
        on: {
          // When the slide changes, reset the transforms to prevent glitches
          slideChangeTransitionStart: function () {
            // Reset the transform for the slides at the start of transition
            const slides = document.querySelectorAll('.swiper-cards-container .swiper-slide');
            slides.forEach(slide => {
              slide.style.transition = 'none'; // Remove transition during reset
            });
          },
          slideChangeTransitionEnd: function () {
            // Re-enable transitions after the change
            const slides = document.querySelectorAll('.swiper-cards-container .swiper-slide');
            slides.forEach(slide => {
              slide.style.transition = 'transform 0.4s ease'; // Re-enable transition
            });
          },
        },
      });

      // Card data
const cardData = [

  //AMPHIBIANS

  { name: "African Bullfrog", category: "Amphibians", animalName: "FroAfrican Bullfrogg", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Axolotl", category: "Amphibians", animalName: "Axolotl", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Carlifornia Newt", category: "Amphibians", animalName: "Carlifornia Newt", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Common Frog", category: "Amphibians", animalName: "Common Frog", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Eastern Grey Tree Frog", category: "Amphibians", animalName: "Eastern Grey Tree Frog", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "European Salamander", category: "Amphibians", animalName: "European Salamander", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Fire Salamander", category: "Amphibians", animalName: "Fire Salamander", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Green Tree Frog", category: "Amphibians", animalName: "Green Tree Frog", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Mole Salamander", category: "Amphibians", animalName: "Mole Salamander", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Red-Eyed Tree Frog", category: "Amphibians", animalName: "Red-Eyed Tree Frog", uniqueClassCategory: "amphibian", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },



// BIRDS

  { name: "African Bullfrog", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Axolotl", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Carlifornia Newt", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Common Frog", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Eastern Grey Tree Frog", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "European Salamander", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Fire Salamander", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Green Tree Frog", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Mole Salamander", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Red-Eyed Tree Frog", category: "Birds", animalName: "Frog", uniqueClassCategory: "bird", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },


  // INVERTEBRATES

  { name: "African Bullfrog", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Axolotl", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Carlifornia Newt", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Common Frog", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Eastern Grey Tree Frog", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "European Salamander", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Fire Salamander", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Green Tree Frog", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Mole Salamander", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },
  { name: "Red-Eyed Tree Frog", category: "Invertebrates", animalName: "Frog", uniqueClassCategory: "invertebrate", 
    backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
    animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
    funFact: "this is a fun fact about this animal"}
  },



    // MAMMALS

    { name: "African Bullfrog", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Axolotl", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Carlifornia Newt", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Common Frog", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Eastern Grey Tree Frog", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "European Salamander", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Fire Salamander", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Green Tree Frog", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Mole Salamander", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },
    { name: "Red-Eyed Tree Frog", category: "Mammals", animalName: "Frog", uniqueClassCategory: "mammal", 
      backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
      animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
      funFact: "this is a fun fact about this animal"}
    },




        // REPTILES

        { name: "African Bullfrog", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Axolotl", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Carlifornia Newt", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Common Frog", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Eastern Grey Tree Frog", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "European Salamander", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Fire Salamander", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Green Tree Frog", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Mole Salamander", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
        { name: "Red-Eyed Tree Frog", category: "Reptiles", animalName: "Frog", uniqueClassCategory: "reptile", 
          backgroundImage: "../assets/1.jpg", modalBackgroundImage: "../assets/3.jpg", image1: "../assets/2.jpg", image2: "../assets/1.jpg", image3: "../assets/3.jpg",
          animalInfo: {scientificName: "weird Scientific name", habitat: "where it's found", diet: "what it eats", behavior: "how it bahaves", adaptations: "features such as this help it survive", status: "extinct or not",
          funFact: "this is a fun fact about this animal"}
        },
];

// DOM Elements
  const cardContainer = document.getElementById("_card_container");
  const searchInput = document.getElementById("_search_input");
  const suggestionsContainer = document.getElementById("_suggestions_container");
  const searchBtn = document.getElementById("_search_btn");
  const resetBtn = document.getElementById("_reset_btn");
  const shuffleBtn = document.getElementById("_shuffle_btn");
  const filterToggleBtn = document.getElementById("_filter_toggle_btn");
  const filterList = document.getElementById("_filter_list");
  const setFilterBtn = document.getElementById("_set_filter_btn");
  const filterCheckboxes = document.querySelectorAll("._filter_checkbox");
  const searchSection = document.getElementById('search-cards');
  
  
  
  document.getElementById("search-icon").addEventListener("click", function () {

 // Get the vertical position of the search section
 const sectionTop = searchSection.getBoundingClientRect().top + window.scrollY;

 // Scroll to the search section with an offset
 const offset = 50; 
 window.scrollTo({
   top: sectionTop - offset,
   behavior: "smooth",
 });
    // Focus on the search input
    searchInput.focus();
  });
  
  function renderCards(cards) {
    cardContainer.innerHTML = "";
  
    cards.slice(0, 10).forEach((card, index) => {
      const uniqueClass = card.uniqueClassCategory
        ? `card-${card.uniqueClassCategory.toLowerCase().replace(/\s+/g, "-")}`
        : "card-default";
  
      cardContainer.innerHTML += `
        <div class="_card ${uniqueClass}" data-category="${card.category}" style="background-image: url('${card.backgroundImage}')">
          <div class="card-overlay">
            <div class="card-heading">
              <h1>${card.animalName}</h1>
            </div>
            
            <div class="read-more">
              <a href="#" class="read-more-btn" data-index="${index}">more info</a>
            </div>
          </div>
        </div>
      `;
    });
  
    // Add event listeners to "Read More" buttons
    document.querySelectorAll(".read-more-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const index = e.target.getAttribute("data-index");
        openModal(cards[index]);
      });
    });
  }
  
  // Function to open the modal
function openModal(card) {
  const modalContainer = document.getElementById("modal-container");
  

  // Dynamically create the modal content
  const modalContent = `
   <div class="modal">
  <div class="modal-header">
    <h2>${card.name}</h2>
    <button class="close-modal">&times;</button>
  </div>
  <div class="modal-body">

    <ul class="animal-details">
      <li><strong>Scientific Name:</strong> <span> ${card.animalInfo.scientificName} </span> </li>
      <li><strong>Category:</strong> <span> ${card.category}</span> </li>
      <li><strong>Habitat:</strong> <span> ${card.animalInfo.habitat}</span> </li>
      <li><strong>Diet:</strong> <span> ${card.animalInfo.diet}</span> </li>
      <li><strong>Behavior:</strong> <span>  ${card.animalInfo.behavior} </span></li>
      <li><strong>Adaptations:</strong> <span> ${card.animalInfo.adaptations}</span> </li>
      <li><strong>Conservation Status:</strong> <span> ${card.animalInfo.status} </span></li>
      <li ><strong class="fun-fact">Fun Fact:</strong> <span class="fun-fact">${card.animalInfo.funFact} </span> </li>
    </ul>

  </div>
  <div class="modal-footer">
    <div class="image-gallery">
      <img src="${card.image1}" alt="Image 1" class="gallery-thumbnail" onclick="openImageGallery(0)">
      <img src="${card.image2}" alt="Image 2" class="gallery-thumbnail" onclick="openImageGallery(1)">
      <img src="${card.image3}" alt="Image 3" class="gallery-thumbnail" onclick="openImageGallery(2)">
    </div>
  </div>
</div>

<div class="image-lightbox" style="display: none;">
  <span class="close-lightbox" onclick="closeImageGallery()">&times;</span>
  <div class="lightbox-content">
    <img id="lightbox-image" src="" alt="Enlarged Image">
    <button class="prev-image" onclick="changeImage(-1)">&#10094;</button>
    <button class="next-image" onclick="changeImage(1)">&#10095;</button>
  </div>
</div>

  `;

  modalContainer.innerHTML = modalContent;
  modalContainer.style.display = "block";
  // Set background image dynamically
  modalContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${card.modalBackgroundImage}')`;
  modalContainer.style.backgroundSize = "cover";
  modalContainer.style.backgroundPosition = "center";
  modalContainer.style.backgroundRepeat = "no-repeat";


  // Store image URLs in an array
  const images = [card.image1, card.image2, card.image3];
  let currentImageIndex = 0;

  // Function to open the image gallery
  window.openImageGallery = function(index) {
    currentImageIndex = index;
    document.querySelector(".image-lightbox").style.display = "flex";
    document.getElementById("lightbox-image").src = images[currentImageIndex];
  };

  // Function to close the image gallery
  window.closeImageGallery = function() {
    document.querySelector(".image-lightbox").style.display = "none";
  };

  // Function to change images (swipe)
  window.changeImage = function(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    document.getElementById("lightbox-image").src = images[currentImageIndex];
  };

  // Close modal functionality
  document.querySelector(".close-modal").addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  });
}

// Add a modal container to your HTML
document.body.insertAdjacentHTML(
  "beforeend",
  `<div id="modal-container" class="modal-container"></div>`
);

// Shuffle and render the cards
renderCards(shuffleCards(cardData));



  // Shuffle cards
  function shuffleCards(cards) {
    return cards.sort(() => Math.random() - 0.5);
  }

  // Filter cards by category
  function filterCards() {
    const activeFilters = Array.from(filterCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    if (activeFilters.length === 0) return cardData;
    return cardData.filter(card => activeFilters.includes(card.category));
  }


  // Search cards
  function searchCards() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCards = filterCards().filter(card =>
      card.name.toLowerCase().includes(searchTerm)
    );
    renderCards(filteredCards);
  }

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "Return") {
      searchCards();
      suggestionsContainer.style.display = 'none'; 

      searchInput.blur();
    }
  });

  // Trigger search when the search button is clicked
  searchBtn.addEventListener("click", searchCards);

  // Function to render search suggestions based on input
function renderSuggestions(query) {
  // Filter the cardData based on the input query (case insensitive)
  let suggestions = cardData.filter(card =>
    card.name.toLowerCase().includes(query.toLowerCase())
  );

  // Sort the suggestions alphabetically
  suggestions = suggestions.sort((a, b) => a.name.localeCompare(b.name));


  // Clear previous suggestions
  suggestionsContainer.innerHTML = '';


  // If the input is empty, hide the suggestions container
  if (query.trim() === '') {
    suggestionsContainer.style.display = 'none';
    return;
  }

  // If there are suggestions, display them
  if (suggestions.length > 0) {
    suggestionsContainer.style.display = 'block'; // Show the suggestions container
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');
      suggestionItem.textContent = suggestion.name;

      // Add click event listener to populate input and close suggestions
      suggestionItem.addEventListener('click', () => {
        searchInput.value = suggestion.name; // Populate input with clicked suggestion
        suggestionsContainer.innerHTML = ''; // Clear suggestions
        suggestionsContainer.style.display = 'none'; // Hide suggestions
      });

      suggestionsContainer.appendChild(suggestionItem);
    });
  } else {
    // If no suggestions, display "No suggestions" message
    suggestionsContainer.style.display = 'block'; // Show the suggestions container
    const noSuggestionsItem = document.createElement('div');
    noSuggestionsItem.classList.add('suggestion-item');
    noSuggestionsItem.textContent = 'No suggestions';
    suggestionsContainer.appendChild(noSuggestionsItem);
  }
}

  // Event listener for the search input to trigger suggestions
  searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  renderSuggestions(query);
  });

  filterToggleBtn.addEventListener("pointerdown", (event) => {
    event.stopPropagation(); // Prevent the event from propagating
    filterList.classList.toggle("hidden"); // Toggle visibility
  });

  document.addEventListener("pointerdown", (event) => {
    if (!filterList.classList.contains("hidden") &&
        !filterList.contains(event.target) &&
        event.target !== filterToggleBtn) {
      filterList.classList.add("hidden"); // Hide the filter list
    }
  });



  // Close lists when clicking outside
document.addEventListener("click", (event) => {
  // Check if the click is outside the suggestions container
  if (!suggestionsContainer.contains(event.target) && event.target !== searchInput) {
    suggestionsContainer.style.display = 'none'; // Hide suggestions
  }

  // Check if the click is outside the filter list

});

  // Apply filters when "Set Filter" is clicked
  setFilterBtn.addEventListener("click", () => {
    renderCards(filterCards());
    filterList.classList.add("hidden"); // Hide dropdown after applying filters
  });


  // Reset filters and shuffle cards
  resetBtn.addEventListener("click", () => {
    // Uncheck all filter checkboxes
    filterCheckboxes.forEach(checkbox => (checkbox.checked = false));

    // Reset the search input
    searchInput.value = "";
    filterList.classList.add("hidden");

    // Render random cards from the full dataset
    renderCards(shuffleCards(cardData)); // Use `cardData` to reset to all cards
  });


  // Shuffle and display cards
  shuffleBtn.addEventListener("click", () => {
    renderCards(shuffleCards(filterCards()));
  });

  // Initial render with random cards
  renderCards(shuffleCards(cardData));
});






