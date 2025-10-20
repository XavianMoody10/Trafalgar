"use strict";

function sideNavigationFunctionality() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const sideNavigation = document.querySelector(".side-navigation");
  const sideNavCloseIcon = document.querySelector(
    ".side-navigation__close-icon"
  );
  let isOpen = false;

  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("fa-bars");
    hamburgerIcon.classList.toggle("fa-xmark");

    if (!isOpen) {
      isOpen = true;
      sideNavigation.animate(
        [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
        { duration: 600, fill: "forwards", easing: "ease-in-out" }
      );
    } else {
      isOpen = false;
      sideNavigation.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }],
        { duration: 600, fill: "forwards", easing: "ease-in-out" }
      );
    }
  });

  sideNavCloseIcon.addEventListener("click", () => {
    isOpen = false;
    sideNavigation.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }],
      { duration: 600, fill: "forwards", easing: "ease-in-out" }
    );
  });
}

sideNavigationFunctionality();
