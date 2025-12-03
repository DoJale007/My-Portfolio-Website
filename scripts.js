document.addEventListener("DOMContentLoaded", function () {
  // EmailJS Configuration (Pre-filled with your credentials)
  emailjs.init("4qfQe-mQc1VypwhJ4");

  // Popup Modal Functions
  function showPopup(title, message, isSuccess = true) {
    const modal = document.getElementById("popupModal");
    const icon = document.getElementById("popupIcon");
    const titleEl = document.getElementById("popupTitle");
    const messageEl = document.getElementById("popupMessage");

    titleEl.textContent = title;
    messageEl.textContent = message;

    icon.className = "popup-icon";
    if (isSuccess) {
      icon.innerHTML = '<i class="bx bx-check-circle"></i>';
      icon.classList.add("success");
    } else {
      icon.innerHTML = '<i class="bx bx-x-circle"></i>';
      icon.classList.add("error");
    }

    modal.classList.add("show");
  }

  function hidePopup() {
    document.getElementById("popupModal").classList.remove("show");
  }

  // Close popup events
  document.getElementById("popupClose").addEventListener("click", hidePopup);
  document.getElementById("popupModal").addEventListener("click", function (e) {
    if (e.target === this) hidePopup();
  });

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

  // EmailJS Contact Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector(".submit-btn");
      const originalBtnText = submitBtn.textContent;

      // Show loading state
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Send email using your credentials
      emailjs
        .sendForm("service_5020nzv", "template_qv81d5r", contactForm)
        .then(function (response) {
          showPopup(
            "Success!",
            "Your message has been sent. I will get back to you soon!"
          );
          contactForm.reset();
        })
        .catch(function (error) {
          showPopup("Error!", "Something went wrong. Please try again.", false);
          console.error("EmailJS error:", error);
        })
        .finally(function () {
          // Reset button
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        });
    });
  }
});
