const hamburger=document.getElementById('hamberger');
const closeBtn=document.getElementById('closeBtn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const navItems = navLinks.querySelectorAll('a');
function closeMenu() {
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('bodylock');
           
  }
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('open');
    overlay.classList.add('show');
    document.body.classList.add('bodylock');
  });
  
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  
  // Close menu when link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  

// disable right click
// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Right-click is disabled!");
});

// Disable keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
    (e.ctrlKey && ["U", "S", "P", "C", "X", "V"].includes(e.key))
  ) {
    e.preventDefault();
    alert("This action is disabled!");
  }
});

// Disable copy, paste, cut
["copy", "paste", "cut"].forEach(eventType => {
  document.addEventListener(eventType, function (e) {
    e.preventDefault();
    alert(`${eventType.charAt(0).toUpperCase() + eventType.slice(1)} is disabled!`);
  });
});


// Function to show popup
  function showCustomPopup(message) {
    const popup = document.getElementById('customPopup');
    popup.textContent = message;
    popup.style.display = 'block';

    // Hide after 2 seconds
    setTimeout(() => {
      popup.style.display = 'none';
    }, 2000);
  }

  // Disable right-click with custom popup
  //document.addEventListener("contextmenu", function (e) {
  //  e.preventDefault();
   // showCustomPopup("🚫 Right-click is disabled!");
  //});






//gsap Animation
gsap.registerPlugin(ScrollTrigger);





gsap.from(".contact,.Resume", {
  scrollTrigger: {
    trigger: ".contact,.Resume",
    toggleActions: "play reset play reset"
  },
  y: 30,
  ease: "power2.out",
  opacity: 0,
  duration: 1,
  delay: 0,
  stagger: 0.5,
  
})

gsap.from(".rightSection img,hr", {
  scrollTrigger: {
    trigger: ".resume ",
    toggleActions: "play reset play reset"
  },
  scale: 0.8,
  ease: "power2.out",
  duration: 1,
  delay: 0,
  stagger: 0.5,
})




gsap.from(".secondSection h1,h5", {
  scrollTrigger: {
    trigger: ".mySkils h1",
    toggleActions: "play reset play reset"
  },
  y: 30,
  ease: "power2.out",
  opacity: 0,
  duration: 1,
  delay: 0,
  stagger: 0.5,
})

gsap.from("#Education h2", {
  scrollTrigger: {
    trigger: "#Education h2",
    toggleActions: "play reset play reset"
  },
  scale: 0.8,
  ease: "power2.out",
  opacity: 0,
  duration: 1,
  delay: 0.5
})




gsap.utils.toArray(".skill-card").forEach((proj) => {
  gsap.from(proj, {
    scrollTrigger: {
      trigger: proj,
      start: "top 80%", // Start when element enters viewport
      toggleActions: "play reset play reset",
      markers: false
    },
    y: 40,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"

  });
});
gsap.utils.toArray(".timeline-item").forEach((proj) => {
  gsap.from(proj, {
    scrollTrigger: {
      trigger: proj,
      start: "top 80%", // Start when element enters viewport
      toggleActions: "play reset play reset",
      markers: false
    },
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.1,
    stagger: 1,
    ease: "power2.out"


  });
});


gsap.utils.toArray(".project-box").forEach((proj) => {
  gsap.from(proj, {
    scrollTrigger: {
      trigger: proj,
      start: "top 80%", // Start when element enters viewport
      toggleActions: "play reset play reset",
      markers: false
    },
    scale: 0.8,
    opacity: 0.5,
    duration: 1.5,
    ease: "power2.out"

  });
});
