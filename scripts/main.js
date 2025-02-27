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
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("app-flex--reverse")) {
          entry.target.children[1].classList.add("animation-enter-right");
          entry.target.children[0].classList.add("animation-enter-left");
        } else {
          entry.target.children[1].classList.add("animation-enter-left");
          entry.target.children[0].classList.add("animation-enter-right");
        }
      }
    });
  }

  let observer = new IntersectionObserver(callback, { threshold: 0.5 });

  appFlexElms.forEach((a) => {
    observer.observe(a);
  });
}

mobileNavigation();
appSectionAnimation();
