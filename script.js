
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      // Create mobile navigation if it doesn't exist
      if (!document.querySelector('.mobile-nav')) {
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        
        // Clone nav links
        const navClone = navLinks.cloneNode(true);
        mobileNav.appendChild(navClone);
        
        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mobile-close-btn';
        closeBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
          </svg>
        `;
        mobileNav.prepend(closeBtn);
        
        document.body.appendChild(mobileNav);
        
        // Add overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        document.body.appendChild(overlay);
        
        // Style for mobile nav
        const style = document.createElement('style');
        style.textContent = `
          .mobile-nav {
            position: fixed;
            top: 0;
            right: 0;
            width: 280px;
            height: 100vh;
            background-color: white;
            z-index: 1000;
            padding: 2rem 1.5rem;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transform: translateX(100%);
            transition: transform 0.3s ease;
          }
          
          .mobile-nav.active {
            transform: translateX(0);
          }
          
          .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .mobile-overlay.active {
            opacity: 1;
            visibility: visible;
          }
          
          .mobile-nav .nav-links {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 2rem;
          }
          
          .mobile-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
          }
        `;
        document.head.appendChild(style);
        
        // Close button event
        closeBtn.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);
      }
      
      // Toggle mobile menu visibility
      document.querySelector('.mobile-nav').classList.add('active');
      document.querySelector('.mobile-overlay').classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  function closeMobileMenu() {
    document.querySelector('.mobile-nav').classList.remove('active');
    document.querySelector('.mobile-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Product actions
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');
  let itemCount = 0;
  
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      itemCount++;
      cartCount.textContent = itemCount;
      
      // Show toast notification
      showToast('Product added to cart!');
    });
  });
  
  const addToWishlistBtns = document.querySelectorAll('.add-to-wishlist');
  addToWishlistBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Toggle filled/unfilled heart icon
      const heartIcon = this.querySelector('svg path');
      if (heartIcon.getAttribute('fill') === 'none') {
        heartIcon.setAttribute('fill', 'currentColor');
        showToast('Product added to wishlist!');
      } else {
        heartIcon.setAttribute('fill', 'none');
        showToast('Product removed from wishlist!');
      }
    });
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value) {
        showToast('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }
  
  // Toast notification system
  function showToast(message) {
    // Create toast container if it doesn't exist
    if (!document.querySelector('.toast-container')) {
      const toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
      
      // Add styles for toast
      const style = document.createElement('style');
      style.textContent = `
        .toast-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .toast {
          background-color: var(--dark-green);
          color: white;
          padding: 1rem;
          border-radius: var(--radius);
          min-width: 250px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          animation: slideIn 0.3s ease forwards;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        .toast-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .toast.hide {
          animation: slideOut 0.3s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
    
    const toastElement = document.createElement('div');
    toastElement.className = 'toast';
    toastElement.innerHTML = `
      <span>${message}</span>
      <button class="toast-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
        </svg>
      </button>
    `;
    
    document.querySelector('.toast-container').appendChild(toastElement);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      toastElement.classList.add('hide');
      setTimeout(() => {
        toastElement.remove();
      }, 300);
    }, 3000);
    
    // Close button for toast
    const closeBtn = toastElement.querySelector('.toast-close');
    closeBtn.addEventListener('click', function() {
      toastElement.classList.add('hide');
      setTimeout(() => {
        toastElement.remove();
      }, 300);
    });
  }
  
  // Handle intersection observer for animations
  const sections = document.querySelectorAll('.section-padding');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
  
  // Add animation styles
  const animationStyle = document.createElement('style');
  animationStyle.textContent = `
    .section-padding {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .section-padding.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(animationStyle);
});

const heroImages = [
  'assets/banner pipoca02.jpg',
  '/assets/banner cafe.jpg',
  'assets/banner torresmo.jpg'
];

const hero = document.querySelector('.hero');

let currentSlide = 0;

function createSlides() {
  heroImages.forEach((imgUrl, index) => {
    const div = document.createElement('div');
    div.classList.add('hero-slide');
    if (index === 0) div.classList.add('active');
    div.style.backgroundImage = `url('${imgUrl}')`;
    hero.appendChild(div);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

createSlides();
setInterval(nextSlide, 5000);