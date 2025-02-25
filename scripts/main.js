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

mobileNavigation();
