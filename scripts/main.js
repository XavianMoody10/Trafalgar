"use strict";

// Mobile navigation functionality
function mobileNavigation() {
  const icon = document.querySelector(".header-mobile-icon");
  const navigation = document.querySelector(".side-navigation");
  let menuIsOpen = false;

  function toggleIcon() {
    icon.classList.toggle("fa-bars-staggered");
    icon.classList.toggle("fa-xmark");
  }

  function toggleNavigation() {
    menuIsOpen = !menuIsOpen;

    if (menuIsOpen) {
      navigation.style.transform = "translateX(0)";
    } else {
      navigation.style.transform = "translateX(-100%)";
    }
  }

  icon.addEventListener("touchstart", () => {
    toggleIcon();
    toggleNavigation();
  });
}

// Execute animation when scrolling to apps section
function appSectionAnimation() {
  const appFlexElms = document.querySelectorAll(".app-flex");

  function callback(entries) {
    entries.forEach((entry) => {
      const children = entry.target.children;

      if (entry.isIntersecting) {
        if (entry.target.classList.contains("app-flex--reverse")) {
          children[1].classList.add("animation-enter-right");
          children[0].classList.add("animation-enter-left");
        } else {
          children[1].classList.add("animation-enter-left");
          children[0].classList.add("animation-enter-right");
        }
      }
    });
  }

  let observer = new IntersectionObserver(callback, { threshold: 0.5 });

  appFlexElms.forEach((a) => {
    observer.observe(a);
  });
}

function testimonialSlider() {
  let currentSlide = 0;
  const testimonies = document.querySelectorAll(".testimony");
  const testimonyTrack = document.querySelector(".testimonial-slider__track");
  const arrows = document.querySelectorAll(".testimonial-controls__arrow");
  const bullets = document.querySelectorAll(".testimonial-controls__bullet");

  // Add and remove active class from bullets
  function toggleBulletClass(index) {
    const activeClass = "testimonial-controls__bullet--active";

    bullets.forEach((b, i) => {
      if (index === i) {
        b.classList.add(activeClass);
      } else {
        b.classList.remove(activeClass);
      }
    });
  }

  // EVENTLISTER FOR PREVIOUS ARROW BUTTON
  arrows[0].addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide = currentSlide - 1;
      toggleBulletClass(currentSlide);
      testimonyTrack.style.transform = `translateX(-${100 * currentSlide}%)`;
    }
  });

  // EVENTLISTER FOR NEXT ARROW BUTTON
  arrows[1].addEventListener("click", () => {
    if (currentSlide < testimonies.length - 1) {
      currentSlide = currentSlide + 1;
      toggleBulletClass(currentSlide);
      testimonyTrack.style.transform = `translateX(-${100 * currentSlide}%)`;
    }
  });
}

mobileNavigation();
appSectionAnimation();
testimonialSlider();
