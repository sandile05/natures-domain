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

  { name: "African Bullfrog", 
    category: "Amphibians", 
    animalName: "African Bullfrog", 
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/african-bullfrog-1_nllyln.webp",  
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/african-bullfrog-1_nllyln.webp", 
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/african-bullfrog-2_me7ye6.webp", 
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/african-bullfrog-3_siglv1.webp", 
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547266/african-bullfrog-4_dmewil.webp",
    animalInfo: {
      scientificName: "Pyxicephalus adspersus", 
      habitat: "Dry and moist savannahs, subtropical or tropical dry shrublands across countries like Angola, Botswana, Kenya, Malawi, Mozambique, Namibia, South Africa, Swaziland, Tanzania, Zambia, and Zimbabwe", 
      diet: "Invertebrates, lizards, birds, and other small vertebrates", 
      behavior: "They are fossorial for most of the year, remaining in burrows or cocoons, and emerge at the start of the rains to breed in shallow pools and ditches.", 
      adaptations: "Capable of forming a cocoon to reduce water loss during dry conditions and can remain dormant underground until the rains return.", 
      status: "Least Concern",
      funFact: "Male bullfrogs are attentive parents; if the pool where their tadpoles develop starts drying out, the male will dig a channel to a larger pool to ensure their survival."
    }
  },
  { name: "Axolotl", 
    category: "Amphibians", 
    animalName: "Axolotl", 
    uniqueClassCategory: "amphibian", 
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/axolotl-1_qwuvft.webp", 
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/axolotl-1_qwuvft.webp", 
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/axolotl-2_pxlzio.webp", 
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/axolotl-3_mjio6j.webp", 
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547265/axolotl-1_qwuvft.webp",
    animalInfo: {
      scientificName: "Ambystoma mexicanum", 
      habitat: "Originally native to Lake Xochimilco in Mexico City.", 
      diet: "Aquatic organisms, including fish, mollusks, aquatic insects, and other axolotls.", 
      behavior: "Notable for retaining larval features, such as external gills, throughout their life—a condition known as paedomorphosis.", 
      adaptations: "Remarkable ability to regenerate limbs, spinal cord, heart, and other organs.", 
      status: "Critically Endangered.",
      funFact: "Axolotls have become symbols of Mexican culture, appearing in various aspects of daily life, including murals, crafts, and even on currency, such as the 50-peso bill."
    }
  },
  {
    name: "Common Frog",
    category: "Amphibians",
    animalName: "Common Frog",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547266/common-frog-1_w1wbab.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547266/common-frog-1_w1wbab.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547266/common-frog-2_jooemm.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547267/common-frog-3_p5xrfb.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547266/common-frog-4_xkgebw.webp",
    animalInfo: {
      scientificName: "Rana temporaria",
      habitat: "Ponds, marshes, and damp meadows in Europe and Asia",
      diet: "Insects, spiders, and worms",
      behavior: "Mostly nocturnal and hibernates during winter",
      adaptations: "Can breathe through its skin while underwater",
      status: "Not extinct",
      funFact: "Can change skin color slightly to blend in with surroundings!"
    }
  },
  {
    name: "Common Toad",
    category: "Amphibians",
    animalName: "Common Toad",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547267/common-toad-1_pthhly.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547267/common-toad-1_pthhly.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547267/common-toad-2_zokqr2.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547268/common-toad-3_umjbyo.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547271/common-toad-4_pi3uyn.webp",
    animalInfo: {
      scientificName: "Bufo bufo",
      habitat: "Forests, gardens, and wetlands across Europe and Asia",
      diet: "Insects, worms, and small invertebrates",
      behavior: "Nocturnal and solitary, using a defensive posture when threatened",
      adaptations: "Warty skin secretes toxins to deter predators",
      status: "Not extinct",
      funFact: "Can live up to 40 years in captivity!"
    }
  },
  {
    name: "Dyeing Dart Frog",
    category: "Amphibians",
    animalName: "Dyeing Dart Frog",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547271/dyeing-dart-frog-1_qjx2tc.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547271/dyeing-dart-frog-1_qjx2tc.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547271/dyeing-dart-frog-2_bg5exn.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547272/dyeing-dart-frog-3_qcwcww.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547272/dyeing-dart-frog-4_vt5ppf.webp",
    animalInfo: {
      scientificName: "Dendrobates tinctorius",
      habitat: "Tropical rainforests of South America",
      diet: "Small insects like ants and termites",
      behavior: "Diurnal and territorial, using bright colors as a warning",
      adaptations: "Skin secretes powerful toxins obtained from its diet",
      status: "Not extinct",
      funFact: "Some indigenous tribes used poison dart frog toxins for hunting!"
    }
  },
  {
    name: "Fire Salamander",
    category: "Amphibians",
    animalName: "Fire Salamander",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547273/fire-salamander-1_gkbk2a.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547273/fire-salamander-1_gkbk2a.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547272/fire-salamander-2_enq2ap.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547273/fire-salamander-3_xc4qxm.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547276/fire-salamander-4_scor1b.webp",
    animalInfo: {
      scientificName: "Salamandra salamandra",
      habitat: "Forests and humid areas in Europe",
      diet: "Worms, insects, and small arthropods",
      behavior: "Active mostly at night and secretes toxins when disturbed",
      adaptations: "Bright black-and-yellow coloration warns predators",
      status: "Not extinct",
      funFact: "Fire salamanders were once believed to be born from fire!"
    }
  },
  {
    name: "Green Tree Frog",
    category: "Amphibians",
    animalName: "Green Tree Frog",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547277/green-tree-frog-1_uh8aan.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547277/green-tree-frog-1_uh8aan.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547277/green-tree-frog-2_e5mudw.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547278/green-tree-frog-3_jl9cea.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547278/green-tree-frog-4_yqupwu.webp",
    animalInfo: {
      scientificName: "Hyla cinerea",
      habitat: "Wetlands, swamps, and forests in the southeastern US",
      diet: "Insects and small invertebrates",
      behavior: "Nocturnal and arboreal, often found clinging to leaves",
      adaptations: "Sticky toe pads allow it to climb smooth surfaces",
      status: "Not extinct",
      funFact: "Known for their loud, musical calls!"
    }
  },
  {
    name: "Hellbender",
    category: "Amphibians",
    animalName: "Hellbender",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547278/hellbender-1_mwjxya.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547278/hellbender-1_mwjxya.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547279/hellbender-2_jtxegd.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547283/hellbender-3_m9doym.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547282/hellbender-4_wxkldw.webp",
    animalInfo: {
      scientificName: "Cryptobranchus alleganiensis",
      habitat: "Fast-moving streams and rivers in the eastern US",
      diet: "Fish, crustaceans, and small amphibians",
      behavior: "Mostly nocturnal and hides under rocks during the day",
      adaptations: "Flattened body and loose skin help absorb oxygen from water",
      status: "Near threatened",
      funFact: "One of the largest salamanders in the world!"
    }
  },
  {
    name: "Oriental Fire-Bellied Toad",
    category: "Amphibians",
    animalName: "Oriental Fire-Bellied Toad",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547282/oriental-fire-bellied-toad-1_kuwmtt.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547282/oriental-fire-bellied-toad-1_kuwmtt.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547284/oriental-fire-bellied-toad-2_xb7prj.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547284/oriental-fire-bellied-toad-3_cq96vk.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547283/oriental-fire-bellied-toad-4_gugvdx.webp",
    animalInfo: {
      scientificName: "Bombina orientalis",
      habitat: "Swamps, rice paddies, and forests in Asia",
      diet: "Insects, worms, and crustaceans",
      behavior: "Displays a ‘unken reflex,’ showing its bright belly when threatened",
      adaptations: "Secretes toxins from its skin as a defense",
      status: "Not extinct",
      funFact: "Known as the ‘fire-bellied toad’ because of its red underside!"
    }
  },
  {
    name: "White’s Tree Frog",
    category: "Amphibians",
    animalName: "White’s Tree Frog",
    uniqueClassCategory: "amphibian",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547283/whites-tree-frog-1_ck4pkg.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547283/whites-tree-frog-1_ck4pkg.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547285/whites-tree-frog-2_leainj.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547288/whites-tree-frog-3_zweuug.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547288/whites-tree-frog-4_ue4onz.webp",
    animalInfo: {
      scientificName: "Litoria caerulea",
      habitat: "Trees and vegetation near water in Australia",
      diet: "Insects, spiders, and small frogs",
      behavior: "Docile and often found in human dwellings",
      adaptations: "Can store water in its body to survive dry periods",
      status: "Not extinct",
      funFact: "Can change color based on temperature and mood!"
    }
  },



// BIRDS

{
  name: "American Robin",
  category: "Birds",
  animalName: "American Robin",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547522/american-robin-1_s4m1hl.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547522/american-robin-1_s4m1hl.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547523/american-robin-2_xhdb00.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547523/american-robin-3_zebgg8.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547524/american-robin-4_mtjewc.webp",
  animalInfo: {
    scientificName: "Turdus migratorius",
    habitat: "Forests, gardens, and parks across North America",
    diet: "Earthworms, insects, and berries",
    behavior: "Diurnal, known for its melodious song",
    adaptations: "Strong vision helps it spot worms in the soil",
    status: "Not extinct",
    funFact: "Often considered a harbinger of spring in North America!"
  }
},
{
  name: "Bald Eagle",
  category: "Birds",
  animalName: "Bald Eagle",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547524/bald-eagle-1_kz7ssv.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547524/bald-eagle-1_kz7ssv.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547525/bald-eagle-2_l4jrx8.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547526/bald-eagle-3_vdv2x4.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547527/bald-eagle-4_jkkmfu.webp",
  animalInfo: {
    scientificName: "Haliaeetus leucocephalus",
    habitat: "Near lakes, rivers, and coastal regions in North America",
    diet: "Primarily fish, but also small mammals and birds",
    behavior: "Territorial and monogamous, building large nests in trees",
    adaptations: "Powerful talons and sharp eyesight for hunting",
    status: "Not extinct",
    funFact: "Has a wingspan of up to 7 feet!"
  }
},
{
  name: "Barn Owl",
  category: "Birds",
  animalName: "Barn Owl",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547527/barn-owl-1_vimz3u.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547527/barn-owl-1_vimz3u.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547528/barn-owl-2_rnfcth.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547529/barn-owl-3_f9hw39.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547530/barn-owl-4_hox0mv.webp",
  animalInfo: {
    scientificName: "Tyto alba",
    habitat: "Open woodlands, farmlands, and barns worldwide",
    diet: "Mostly small rodents",
    behavior: "Nocturnal and silent in flight",
    adaptations: "Heart-shaped face helps direct sound for hunting",
    status: "Not extinct",
    funFact: "Can locate prey purely by sound in complete darkness!"
  }
},
{
  name: "Blue Jay",
  category: "Birds",
  animalName: "Blue Jay",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547531/blue-jay-1_mwfcks.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547531/blue-jay-1_mwfcks.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547532/blue-jay-2_d7pxd4.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547533/blue-jay-3_rmzo30.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547534/blue-jay-4_gfndns.webp",
  animalInfo: {
    scientificName: "Cyanocitta cristata",
    habitat: "Forests, suburbs, and city parks in North America",
    diet: "Nuts, seeds, insects, and small vertebrates",
    behavior: "Intelligent and social, often mimicking hawk calls",
    adaptations: "Strong memory helps them store food for later",
    status: "Not extinct",
    funFact: "Can recognize human faces and remember individuals!"
  }
},
{
  name: "Common Kingfisher",
  category: "Birds",
  animalName: "Common Kingfisher",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547535/common-kingfisher-1_rtdrvi.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547535/common-kingfisher-1_rtdrvi.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547536/common-kingfisher-2_y16q12.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547537/common-kingfisher-3_e4qqpi.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547538/common-kingfisher-4_wkgzp3.webp",
  animalInfo: {
    scientificName: "Alcedo atthis",
    habitat: "Lakes, rivers, and coastal regions in Europe and Asia",
    diet: "Small fish, aquatic insects, and crustaceans",
    behavior: "Solitary and territorial, diving to catch prey",
    adaptations: "Streamlined body and specialized beak for fishing",
    status: "Not extinct",
    funFact: "Can dive into the water at lightning speed!"
  }
},
{
  name: "Emperor Penguin",
  category: "Birds",
  animalName: "Emperor Penguin",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547539/emperor-penguin-1_ubjk2g.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547539/emperor-penguin-1_ubjk2g.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547540/emperor-penguin-2_bu66bg.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547541/emperor-penguin-3_m9fsfp.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547542/emperor-penguin-4_zf3mnb.webp",
  animalInfo: {
    scientificName: "Aptenodytes forsteri",
    habitat: "Antarctic ice sheets and surrounding oceans",
    diet: "Fish, squid, and krill",
    behavior: "Highly social and forms large colonies",
    adaptations: "Thick layer of blubber and dense feathers for warmth",
    status: "Near threatened",
    funFact: "Males incubate eggs on their feet for two months without eating!"
  }
},
{
  name: "European Robin",
  category: "Birds",
  animalName: "European Robin",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547544/european-robin-1_jfabiq.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547544/european-robin-1_jfabiq.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547544/european-robin-2_qpzgia.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547545/european-robin-3_nf4dwm.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547547/european-robin-4_nefnff.webp",
  animalInfo: {
    scientificName: "Erithacus rubecula",
    habitat: "Gardens, forests, and countryside in Europe",
    diet: "Insects, berries, and seeds",
    behavior: "Territorial and aggressive despite its cute appearance",
    adaptations: "Excellent vision helps it find food in low light",
    status: "Not extinct",
    funFact: "Males and females sing year-round to defend territory!"
  }
},
{
  name: "Great Horned Owl",
  category: "Birds",
  animalName: "Great Horned Owl",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547548/great-horned-owl-1_woniyi.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547548/great-horned-owl-1_woniyi.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547549/great-horned-owl-2_hshmlu.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547549/great-horned-owl-3_gm7rbi.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547550/great-horned-owl-4_ctmz9m.webp",
  animalInfo: {
    scientificName: "Bubo virginianus",
    habitat: "Forests, grasslands, and deserts in the Americas",
    diet: "Mammals, birds, reptiles, and amphibians",
    behavior: "Nocturnal and silent in flight, ambushing prey",
    adaptations: "Powerful talons can exert 500 pounds of pressure",
    status: "Not extinct",
    funFact: "Can turn its head 270 degrees!"
  }
},
{
  name: "Peacock",
  category: "Birds",
  animalName: "Peacock",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547551/peacock-1_abv6t1.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547551/peacock-1_abv6t1.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547553/peacock-2_dyzoxs.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547554/peacock-3_kvwdqf.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547555/peacock-4_t7rmqn.webp",
  animalInfo: {
    scientificName: "Pavo cristatus",
    habitat: "Forests and open woodlands in South Asia",
    diet: "Seeds, insects, and small reptiles",
    behavior: "Males display their large, colorful tail feathers to attract females",
    adaptations: "Iridescent feathers create a shimmering effect",
    status: "Not extinct",
    funFact: "The peacock's train can be over 5 feet long!"
  }
},
{
  name: "Peregrine Falcon",
  category: "Birds",
  animalName: "Peregrine Falcon",
  uniqueClassCategory: "bird",
  backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547555/peregrine-falcon-1_psrktd.webp",
  modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547555/peregrine-falcon-1_psrktd.webp",
  image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547556/peregrine-falcon-2_txecrs.webp",
  image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547558/peregrine-falcon-3_fbtdtr.webp",
  image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547559/peregrine-falcon-4_upcsio.webp",
  animalInfo: {
    scientificName: "Falco peregrinus",
    habitat: "Cliffs, mountains, and urban areas worldwide",
    diet: "Mostly birds, caught in mid-air",
    behavior: "Fast and agile, known for its incredible hunting skills",
    adaptations: "Can reach speeds of over 240 mph when diving",
    status: "Not extinct",
    funFact: "The fastest bird in the world!"
  }
},


  // INVERTEBRATES

  {
    name: "Ant",
    category: "Invertebrates",
    animalName: "Ant",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547677/ant-1_npejmp.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547677/ant-1_npejmp.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547678/ant-2_sv44jl.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547679/ant-3_kz7ub0.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547679/ant-4_vbgrre.webp",
    animalInfo: {
      scientificName: "Formicidae",
      habitat: "Forests, grasslands, and urban areas worldwide",
      diet: "Omnivorous—eats plants, fungi, and other insects",
      behavior: "Highly social, living in structured colonies with a queen",
      adaptations: "Can carry objects up to 50 times its body weight",
      status: "Not extinct",
      funFact: "Ants communicate using pheromones!"
    }
  },
  {
    name: "Butterfly",
    category: "Invertebrates",
    animalName: "Butterfly",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547681/butterfly-1_mvv5uo.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547681/butterfly-1_mvv5uo.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547682/butterfly-2_s44qdy.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547682/butterfly-3_izkgd3.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547683/butterfly-4_ie2ljx.webp",
    animalInfo: {
      scientificName: "Lepidoptera",
      habitat: "Gardens, meadows, and forests worldwide",
      diet: "Nectar from flowers",
      behavior: "Flies during the day and migrates in some species",
      adaptations: "Colorful wings provide camouflage and warning signals",
      status: "Not extinct",
      funFact: "Some butterflies taste with their feet!"
    }
  },
  {
    name: "Centipede",
    category: "Invertebrates",
    animalName: "Centipede",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547682/butterfly-3_izkgd3.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547682/butterfly-3_izkgd3.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547687/centipede-3_h4esha.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547688/centipede-4_gnpluw.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547684/centipede-1_w1uyhe.webp",
    animalInfo: {
      scientificName: "Chilopoda",
      habitat: "Soil, leaf litter, and under rocks worldwide",
      diet: "Carnivorous—feeds on insects and small animals",
      behavior: "Nocturnal and fast-moving",
      adaptations: "Venomous fangs help subdue prey",
      status: "Not extinct",
      funFact: "Despite their name, they rarely have exactly 100 legs!"
    }
  },
  {
    name: "Earthworm",
    category: "Invertebrates",
    animalName: "Earthworm",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547689/earthworm-2_cvzfrl.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547689/earthworm-2_cvzfrl.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547687/earthworm-1_ikvuos.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547690/earthworm-3_t1qfi9.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547692/earthworm-4_afigba.webp",
    animalInfo: {
      scientificName: "Lumbricina",
      habitat: "Soil and moist environments worldwide",
      diet: "Decaying plant matter and microorganisms",
      behavior: "Burrows underground, improving soil aeration",
      adaptations: "Breathes through its skin",
      status: "Not extinct",
      funFact: "Can regenerate lost segments!"
    }
  },
  {
    name: "Jellyfish",
    category: "Invertebrates",
    animalName: "Jellyfish",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547692/jellyfish-1_zbel0r.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547692/jellyfish-1_zbel0r.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547693/jellyfish-2_uuajqz.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547695/jellyfish-3_mej9dc.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547696/jellyfish-4_is2tav.webp",
    animalInfo: {
      scientificName: "Scyphozoa",
      habitat: "Oceans worldwide",
      diet: "Small fish, plankton, and crustaceans",
      behavior: "Drifts with ocean currents",
      adaptations: "Uses tentacles with stinging cells to catch prey",
      status: "Not extinct",
      funFact: "Some species are biologically immortal!"
    }
  },
  {
    name: "Lobster",
    category: "Invertebrates",
    animalName: "Lobster",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547698/lobster-1_h68gad.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547698/lobster-1_h68gad.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547699/lobster-2_vi1ugh.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547701/lobster-3_a8c8ef.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547701/lobster-4_i9rsvp.webp",
    animalInfo: {
      scientificName: "Nephropidae",
      habitat: "Oceans, near rocky and sandy bottoms",
      diet: "Fish, mollusks, and algae",
      behavior: "Solitary and territorial",
      adaptations: "Strong claws help break open shells",
      status: "Not extinct",
      funFact: "Lobsters can live over 100 years!"
    }
  },
  {
    name: "Octopus",
    category: "Invertebrates",
    animalName: "Octopus",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547702/octopus-1_z22hwv.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547702/octopus-1_z22hwv.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547704/octopus-2_xksu7r.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547705/octopus-3_sg4kyo.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547706/octopus-4_rdqqyo.webp",
    animalInfo: {
      scientificName: "Octopoda",
      habitat: "Oceans, especially coral reefs and deep waters",
      diet: "Crustaceans, fish, and mollusks",
      behavior: "Highly intelligent and problem-solving",
      adaptations: "Can change color and texture for camouflage",
      status: "Not extinct",
      funFact: "Has three hearts and blue blood!"
    }
  },
  {
    name: "Scorpion",
    category: "Invertebrates",
    animalName: "Scorpion",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547708/scorpion-1_dx6fqz.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547708/scorpion-1_dx6fqz.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547710/scorpion-2_gbkmsd.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547712/scorpion-4_djsfcs.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547710/scorpion-3_de4b6p.webp",
    animalInfo: {
      scientificName: "Scorpiones",
      habitat: "Deserts, forests, and grasslands worldwide",
      diet: "Insects, spiders, and small vertebrates",
      behavior: "Nocturnal and solitary",
      adaptations: "Has a venomous stinger for defense and hunting",
      status: "Not extinct",
      funFact: "Glows under ultraviolet light!"
    }
  },
  {
    name: "Spider",
    category: "Invertebrates",
    animalName: "Spider",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547713/spider-1_m5phe8.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547713/spider-1_m5phe8.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547714/spider-2_om0t1k.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547716/spider-3_keu4nk.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547717/spider-4_ufstlj.webp",
    animalInfo: {
      scientificName: "Araneae",
      habitat: "Forests, grasslands, and urban areas worldwide",
      diet: "Insects and sometimes small vertebrates",
      behavior: "Builds webs or actively hunts prey",
      adaptations: "Silk-spinning abilities to create webs for trapping food",
      status: "Not extinct",
      funFact: "Some spiders can fly using silk threads!"
    }
  },
  {
    name: "Squid",
    category: "Invertebrates",
    animalName: "Squid",
    uniqueClassCategory: "invertebrate",
    backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547718/squid-1_haa0ab.webp",
    modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547718/squid-1_haa0ab.webp",
    image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547720/squid-2_xx3xqv.webp",
    image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547721/squid-3_s65itv.webp",
    image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746547723/squid-4_i4vodj.webp",
    animalInfo: {
      scientificName: "Teuthida",
      habitat: "Oceans worldwide",
      diet: "Fish, shrimp, and other squids",
      behavior: "Fast swimmers, using jet propulsion",
      adaptations: "Can release ink to escape predators",
      status: "Not extinct",
      funFact: "Some species have bioluminescent abilities!"
    }
  },



    // MAMMALS

    {
      name: "African Elephant",
      category: "Mammals",
      animalName: "African Elephant",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548220/african-elephant-1_p2nxc0.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548220/african-elephant-1_p2nxc0.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548221/african-elephant-2_e39k17.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548222/african-elephant-3_lqyd2n.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548225/african-elephant-4_frrhpz.webp",
      animalInfo: {
        scientificName: "Loxodonta africana",
        habitat: "Savannas, forests, and grasslands in Africa",
        diet: "Herbivorous—eats grass, bark, and fruit",
        behavior: "Lives in matriarchal herds and communicates through low-frequency sounds",
        adaptations: "Large ears help regulate body temperature",
        status: "Vulnerable",
        funFact: "Elephants can 'hear' with their feet by sensing vibrations!"
      }
    },
    {
      name: "Cheetah",
      category: "Mammals",
      animalName: "Cheetah",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548226/cheatah-1_vdfsy6.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548226/cheatah-1_vdfsy6.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548228/cheatah-2_mqubj0.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548230/cheatah-3_kdgnjk.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548231/cheatah-4_fbr4oz.webp",
      animalInfo: {
        scientificName: "Acinonyx jubatus",
        habitat: "Savannas and open grasslands in Africa and parts of Iran",
        diet: "Carnivorous—feeds mainly on antelopes and small mammals",
        behavior: "Solitary or lives in small groups, uses speed to hunt",
        adaptations: "Can reach speeds of up to 120 km/h (75 mph)",
        status: "Vulnerable",
        funFact: "Cheetahs have non-retractable claws for better grip while running!"
      }
    },
    {
      name: "Dolphin",
      category: "Mammals",
      animalName: "Dolphin",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548239/dolphin-4_ja5szf.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548239/dolphin-4_ja5szf.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548236/dolphin-2_l5lrip.webp",
      image2: "../assets/mammals/dolphin-3.jpg",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548236/dolphin-3_xkt4ye.webp",
      animalInfo: {
        scientificName: "Delphinidae",
        habitat: "Oceans and coastal waters worldwide",
        diet: "Carnivorous—eats fish and squid",
        behavior: "Highly social, lives in pods and communicates with clicks and whistles",
        adaptations: "Uses echolocation to find prey",
        status: "Varies by species",
        funFact: "Dolphins are one of the most intelligent animals, capable of recognizing themselves in mirrors!"
      }
    },
    {
      name: "Giraffe",
      category: "Mammals",
      animalName: "Giraffe",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548242/giraffe-1_eimk7g.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548242/giraffe-1_eimk7g.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548243/giraffe-2_pxufht.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548246/giraffe-3_nunroz.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548248/giraffe-4_julihe.webp",
      animalInfo: {
        scientificName: "Giraffa camelopardalis",
        habitat: "Savannas and open woodlands in Africa",
        diet: "Herbivorous—feeds on leaves, flowers, and fruits",
        behavior: "Lives in loose social groups and uses its long neck to reach food",
        adaptations: "Has a long tongue (up to 45 cm) to help grasp leaves",
        status: "Vulnerable",
        funFact: "Giraffes only need about 30 minutes of sleep per day!"
      }
    },
    {
      name: "Grizzly Bear",
      category: "Mammals",
      animalName: "Grizzly Bear",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548251/grizzly-bear-1_eycxkf.webp",
      modalBackgroundImage: "../assets/mammals/grizzly-bear-1.jpg",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548252/grizzly-bear-2_wmdkky.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548257/grizzly-bear-3_vvsotd.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548258/grizzly-bear-4_axiiaz.webp",
      animalInfo: {
        scientificName: "Ursus arctos horribilis",
        habitat: "Forests, mountains, and tundra in North America",
        diet: "Omnivorous—eats fish, berries, and small mammals",
        behavior: "Solitary except during mating season or when mothers raise cubs",
        adaptations: "Thick fur provides insulation in cold climates",
        status: "Not extinct",
        funFact: "Grizzlies can run up to 56 km/h (35 mph) despite their size!"
      }
    },
    {
      name: "Jaguar",
      category: "Mammals",
      animalName: "Jaguar",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548260/jaguar-1_kdgbcf.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548260/jaguar-1_kdgbcf.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548265/jaguar-2_p3zgxb.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548266/jaguar-3_bzpjxx.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548268/jaguar-4_ohqwhk.webp",
      animalInfo: {
        scientificName: "Panthera onca",
        habitat: "Rainforests, swamps, and grasslands in Central and South America",
        diet: "Carnivorous—feeds on deer, capybaras, and caimans",
        behavior: "Solitary and highly territorial, ambushes prey",
        adaptations: "Strongest bite force of any big cat, capable of crushing bones",
        status: "Near Threatened",
        funFact: "Unlike most cats, jaguars kill by biting through the skull!"
      }
    },
    {
      name: "Kangaroo",
      category: "Mammals",
      animalName: "Kangaroo",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548274/kangaroo-1_ohwef0.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548274/kangaroo-1_ohwef0.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548275/kangaroo-2_pa3y5l.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548279/kangaroo-3_n9bf9q.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548283/kangaroo-4_yvegya.webp",
      animalInfo: {
        scientificName: "Macropus",
        habitat: "Grasslands, forests, and deserts in Australia",
        diet: "Herbivorous—feeds on grasses and leaves",
        behavior: "Lives in social groups called mobs, moves by hopping",
        adaptations: "Strong hind legs allow powerful jumps",
        status: "Not extinct",
        funFact: "A kangaroo can’t walk backward!"
      }
    },
    {
      name: "Leopard",
      category: "Mammals",
      animalName: "Leopard",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548284/leopard-1_znqlop.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548284/leopard-1_znqlop.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548288/leopard-2_tubau2.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548294/leopard-3_wp0rtb.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548296/leopard-4_iifkxu.webp",
      animalInfo: {
        scientificName: "Panthera pardus",
        habitat: "Forests, savannas, and mountains across Africa and Asia",
        diet: "Carnivorous—hunts small to medium-sized mammals and birds",
        behavior: "Solitary and elusive, often drags prey up trees",
        adaptations: "Strong, agile climber with excellent night vision",
        status: "Vulnerable",
        funFact: "Leopards can carry prey twice their weight up a tree!"
      }
    },
    {
      name: "Lion",
      category: "Mammals",
      animalName: "Lion",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548299/lion-1_wa6vop.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548299/lion-1_wa6vop.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548305/lion-2_zvdtmn.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548307/lion-3_sbwg2l.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548309/lion-4_hwwasb.webp",
      animalInfo: {
        scientificName: "Panthera leo",
        habitat: "Grasslands and savannas in Africa and parts of India",
        diet: "Carnivorous—feeds on large herbivores like zebras and buffalo",
        behavior: "Lives in prides and is the only social big cat",
        adaptations: "Powerful jaws and teamwork allow them to take down large prey",
        status: "Vulnerable",
        funFact: "Lions can sleep up to 20 hours a day!"
      }
    },
    {
      name: "Polar Bear",
      category: "Mammals",
      animalName: "Polar Bear",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548316/polar-bear-1_sejlag.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548316/polar-bear-1_sejlag.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548317/polar-bear-2_xfyxvg.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548324/polar-bear-3_fmpbvt.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548324/polar-bear-4_htebok.webp",
      animalInfo: {
        scientificName: "Ursus maritimus",
        habitat: "Arctic sea ice and coastal regions",
        diet: "Carnivorous—primarily eats seals",
        behavior: "Solitary and relies on ice floes to hunt",
        adaptations: "Thick blubber and fur provide insulation",
        status: "Vulnerable",
        funFact: "Despite their white fur, polar bears have black skin!"
      }
    },
    {
      name: "Red Fox",
      category: "Mammals",
      animalName: "Red Fox",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548331/red-fox-1_r7boxg.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548331/red-fox-1_r7boxg.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548332/red-fox-2_ykat4d.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548337/red-fox-3_dmrlk2.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548340/red-fox-4_c6nxyr.webp",
      animalInfo: {
        scientificName: "Vulpes vulpes",
        habitat: "Forests, grasslands, and urban areas worldwide",
        diet: "Omnivorous—eats small mammals, fruits, and insects",
        behavior: "Nocturnal and known for its cunning hunting skills",
        adaptations: "Has excellent hearing to detect prey underground",
        status: "Not extinct",
        funFact: "Foxes use their tails as a blanket to keep warm!"
      }
    },
    {
      name: "Snow Leopard",
      category: "Mammals",
      animalName: "Snow Leopard",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548344/snow-leopard-1_vo9ync.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548344/snow-leopard-1_vo9ync.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548346/snow-leopard-2_oyepto.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548353/snow-leopard-3_qrn7vv.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548354/snow-leopard-4_kz6lj1.webp",
      animalInfo: {
        scientificName: "Panthera uncia",
        habitat: "Rocky mountains and alpine forests in Central and South Asia",
        diet: "Carnivorous—feeds on mountain goats, sheep, and smaller mammals",
        behavior: "Solitary and elusive, active mainly at dawn and dusk",
        adaptations: "Thick fur and long tail help it survive cold temperatures",
        status: "Vulnerable",
        funFact: "Snow leopards can leap up to 15 meters (50 feet) in one bound!"
      }
    },
    {
      name: "Tiger",
      category: "Mammals",
      animalName: "Tiger",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548355/tiger-1_nphg30.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548355/tiger-1_nphg30.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548362/tiger-2_xicplx.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548363/tiger-3_azihd6.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548364/tiger-4_kyeg1l.webp",
      animalInfo: {
        scientificName: "Panthera tigris",
        habitat: "Forests, grasslands, and wetlands in Asia",
        diet: "Carnivorous—feeds on deer, wild boar, and even bears",
        behavior: "Solitary and territorial, marks its range with scent",
        adaptations: "Camouflaged coat helps it ambush prey",
        status: "Endangered",
        funFact: "Tigers are excellent swimmers and love water!"
      }
    },
    {
      name: "Wolf",
      category: "Mammals",
      animalName: "Wolf",
      uniqueClassCategory: "mammal",
      backgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548372/wolf-1_mcwrvw.webp",
      modalBackgroundImage: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548372/wolf-1_mcwrvw.webp",
      image1: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548373/wolf-2_qq4ito.webp",
      image2: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548381/wolf-3_j4nr14.webp",
      image3: "https://res.cloudinary.com/dmko00n6s/image/upload/v1746548383/wolf-4_jk7dog.webp",
      animalInfo: {
        scientificName: "Canis lupus",
        habitat: "Forests, tundra, and mountains across North America, Europe, and Asia",
        diet: "Carnivorous—feeds on deer, elk, and small mammals",
        behavior: "Lives and hunts in packs",
        adaptations: "Sharp teeth and strong social bonds aid survival",
        status: "Not extinct",
        funFact: "Wolves can communicate with over 20 different vocalizations!"
      }
    },




        // REPTILES

        {
          name: "American Alligator",
          category: "Reptiles",
          animalName: "American Alligator",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/american-alligator-1.webp",
          modalBackgroundImage: "../assets/reptiles/american-alligator-1.webp",
          image1: "../assets/reptiles/american-alligator-2.jpg",
          image2: "../assets/reptiles/american-alligator-3.webp",
          image3: "../assets/reptiles/american-alligator-4.jpg",
          animalInfo: {
            scientificName: "Alligator mississippiensis",
            habitat: "Swamps, marshes, and slow-moving rivers in the southeastern United States",
            diet: "Carnivorous—eats fish, birds, and small mammals",
            behavior: "Solitary and territorial, ambushes prey in water",
            adaptations: "Powerful jaws and armored skin for protection",
            status: "Not extinct",
            funFact: "Can stay underwater for up to an hour without surfacing!"
          }
        },
        {
          name: "Ball Python",
          category: "Reptiles",
          animalName: "Ball Python",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/ball-python-1.jpeg",
          modalBackgroundImage: "../assets/reptiles/ball-python-1.jpeg",
          image1: "../assets/reptiles/ball-python-2.jpeg",
          image2: "../assets/reptiles/ball-python-3.jpg",
          image3: "../assets/reptiles/ball-python-4.jpeg",
          animalInfo: {
            scientificName: "Python regius",
            habitat: "Grasslands and forests in West and Central Africa",
            diet: "Carnivorous—eats small mammals and birds",
            behavior: "Nocturnal and non-venomous, coils into a ball when threatened",
            adaptations: "Uses heat-sensitive pits to detect warm-blooded prey",
            status: "Not extinct",
            funFact: "Ball pythons can go months without eating!"
          }
        },
        {
          name: "Bearded Dragon",
          category: "Reptiles",
          animalName: "Bearded Dragon",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/bearded-dragon-1.jpg",
          modalBackgroundImage: "../assets/reptiles/bearded-dragon-1.jpg",
          image1: "../assets/reptiles/bearded-dragon-2.avif",
          image2: "../assets/reptiles/bearded-dragon-3.jpg",
          image3: "../assets/reptiles/bearded-dragon-4.jpg",
          animalInfo: {
            scientificName: "Pogona vitticeps",
            habitat: "Deserts and dry woodlands in Australia",
            diet: "Omnivorous—eats insects, fruits, and leaves",
            behavior: "Basks in the sun and uses body language to communicate",
            adaptations: "Can puff out its 'beard' when threatened",
            status: "Not extinct",
            funFact: "Can run on two legs when escaping predators!"
          }
        },
        {
          name: "Chameleon",
          category: "Reptiles",
          animalName: "Chameleon",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/chameleon-1.jpeg",
          modalBackgroundImage: "../assets/reptiles/chameleon-1.jpeg",
          image1: "../assets/reptiles/chameleon-2.webp",
          image2: "../assets/reptiles/chameleon-3.png",
          image3: "../assets/reptiles/chameleon-4.jpg",
          animalInfo: {
            scientificName: "Chamaeleonidae",
            habitat: "Forests, deserts, and savannas in Africa, Madagascar, and parts of Asia",
            diet: "Carnivorous—eats insects and small invertebrates",
            behavior: "Solitary and slow-moving, uses camouflage to avoid predators",
            adaptations: "Can move its eyes independently and change skin color",
            status: "Varies by species",
            funFact: "Some chameleons have tongues longer than their body!"
          }
        },
        {
          name: "Common Snapping Turtle",
          category: "Reptiles",
          animalName: "Common Snapping Turtle",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/common-snapping-turtle-1.jpeg",
          modalBackgroundImage: "../assets/reptiles/common-snapping-turtle-1.jpeg",
          image1: "../assets/reptiles/common-snapping-turtle-2.png",
          image2: "../assets/reptiles/common-snapping-turtle-3.jpg",
          image3: "../assets/reptiles/common-snapping-turtle-4.webp",
          animalInfo: {
            scientificName: "Chelydra serpentina",
            habitat: "Freshwater ponds, lakes, and swamps in North America",
            diet: "Omnivorous—eats fish, amphibians, plants, and carrion",
            behavior: "Aggressive when threatened, stays mostly underwater",
            adaptations: "Strong jaw and hooked beak for catching prey",
            status: "Not extinct",
            funFact: "Can snap with a bite force of over 200 PSI!"
          }
        },
        {
          name: "Gila Monster",
          category: "Reptiles",
          animalName: "Gila Monster",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/gila-monster-1.jpg",
          modalBackgroundImage: "../assets/reptiles/gila-monster-1.jpg",
          image1: "../assets/reptiles/gila-monster-2.webp",
          image2: "../assets/reptiles/gila-monster-3.jpg",
          image3: "../assets/reptiles/gila-monster-4.jpg",
          animalInfo: {
            scientificName: "Heloderma suspectum",
            habitat: "Deserts and scrublands in the southwestern United States and Mexico",
            diet: "Carnivorous—eats eggs, small mammals, and birds",
            behavior: "Slow-moving but venomous, stores fat in its tail",
            adaptations: "One of the few venomous lizards, delivers toxins through grooves in teeth",
            status: "Near Threatened",
            funFact: "Its venom has been used to develop diabetes medication!"
          }
        },
        {
          name: "Green Anaconda",
          category: "Reptiles",
          animalName: "Green Anaconda",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/green-anaconda-1.jpg",
          modalBackgroundImage: "../assets/reptiles/green-anaconda-1.jpg",
          image1: "../assets/reptiles/green-anaconda-2.webp",
          image2: "../assets/reptiles/green-anaconda-3.jpg",
          image3: "../assets/reptiles/green-anaconda-4.webp",
          animalInfo: {
            scientificName: "Eunectes murinus",
            habitat: "Swamps, marshes, and slow-moving rivers in South America",
            diet: "Carnivorous—eats fish, birds, mammals, and even caimans",
            behavior: "Ambush predator, constricts prey before swallowing",
            adaptations: "Nostrils and eyes on top of the head allow it to stay submerged",
            status: "Not extinct",
            funFact: "One of the heaviest snakes in the world, weighing up to 250 kg!"
          }
        },
        {
          name: "Komodo Dragon",
          category: "Reptiles",
          animalName: "Komodo Dragon",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/komodo-dragon-1.avif",
          modalBackgroundImage: "../assets/reptiles/komodo-dragon-1.avif",
          image1: "../assets/reptiles/komodo-dragon-2.jpg",
          image2: "../assets/reptiles/komodo-dragon-3.avif",
          image3: "../assets/reptiles/komodo-dragon-4.webp",
          animalInfo: {
            scientificName: "Varanus komodoensis",
            habitat: "Islands of Indonesia",
            diet: "Carnivorous—eats deer, pigs, and even water buffalo",
            behavior: "Uses ambush tactics and a powerful bite to kill prey",
            adaptations: "Has venomous saliva that prevents blood clotting",
            status: "Endangered",
            funFact: "Can detect carrion from up to 9 km (5.6 miles) away!"
          }
        },
        {
          name: "Leatherback Sea Turtle",
          category: "Reptiles",
          animalName: "Leatherback Sea Turtle",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/leatherback-sea-turtle-1.jpg",
          modalBackgroundImage: "../assets/reptiles/leatherback-sea-turtle-1.jpg",
          image1: "../assets/reptiles/leatherback-sea-turtle-2.jpg",
          image2: "../assets/reptiles/leatherback-sea-turtle-3.jpg",
          image3: "../assets/reptiles/leatherback-sea-turtle-4.jpg",
          animalInfo: {
            scientificName: "Dermochelys coriacea",
            habitat: "Oceans worldwide, from the tropics to cold waters",
            diet: "Carnivorous—feeds mainly on jellyfish",
            behavior: "Migrates thousands of kilometers between feeding and nesting sites",
            adaptations: "Has a flexible, leathery shell instead of a hard one",
            status: "Vulnerable",
            funFact: "Can dive over 1,200 meters deep!"
          }
        },
        {
          name: "Tokay Gecko",
          category: "Reptiles",
          animalName: "Tokay Gecko",
          uniqueClassCategory: "reptile",
          backgroundImage: "../assets/reptiles/tokay-gecko-1.webp",
          modalBackgroundImage: "../assets/reptiles/tokay-gecko-1.webp",
          image1: "../assets/reptiles/tokay-gecko-2.webp",
          image2: "../assets/reptiles/tokay-gecko-3.jpg",
          image3: "../assets/reptiles/tokay-gecko-4.jpeg",
          animalInfo: {
            scientificName: "Gekko gecko",
            habitat: "Rainforests and urban areas in Southeast Asia",
            diet: "Carnivorous—eats insects and small vertebrates",
            behavior: "Territorial and aggressive when threatened",
            adaptations: "Sticky toe pads allow it to climb smooth surfaces",
            status: "Not extinct",
            funFact: "Has a loud, distinctive call that sounds like 'To-kay!'"
          }
        }
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
        <div class="_card ${uniqueClass}" data-aos="fade-left" data-aos-delay="300" data-category="${card.category}" style="background-image: url('${card.backgroundImage}')">
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






