document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuIcon = document.getElementById("menuIcon");
  const navMenu = document.getElementById("navMenu");
  const body = document.body;

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");
    menuIcon.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show-menu");
      menuIcon.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  // Smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    // Simple alert (you can integrate with EmailJS or Formspree later)
    alert(
      `Thank you, ${formData.name}! Your message has been received. I'll get back to you soon at ${formData.email}.`
    );

    // Clear form
    this.reset();
  });

  // Auto-update copyright year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
