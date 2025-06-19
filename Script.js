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
  
