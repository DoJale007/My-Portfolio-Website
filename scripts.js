document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuIcon = document.getElementById("menuIcon");
  const navMenu = document.getElementById("navMenu");
  const body = document.body;

  menuIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu.classList.toggle("show-menu");
    menuIcon.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show-menu");
      menuIcon.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      body.classList.contains("menu-open") &&
      !navMenu.contains(e.target) &&
      !menuIcon.contains(e.target)
    ) {
      navMenu.classList.remove("show-menu");
      menuIcon.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 60;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });

  // Update copyright year
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
