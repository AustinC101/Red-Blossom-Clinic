// Auto Footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
  }
});

// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑ Top";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "80px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
  } else {
      scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form RegEx
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
      form.addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const phone = document.getElementById("phone").value.trim();
          const message = document.getElementById("message").value.trim();

          const nameRegex = /^[A-Za-z\s]{2,30}$/;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;

          if (!nameRegex.test(name)) {
              alert("Please enter a valid name (letters only).");
              return;
          }

          if (!emailRegex.test(email)) {
              alert("Please enter a valid email address.");
              return;
          }

          if (!phoneRegex.test(phone)) {
              alert("Phone must be formatted like (123) 456-7890");
              return;
          }

          if (message.length < 10) {
              alert("Message must be at least 10 characters.");
              return;
          }

          alert("Form submitted successfully!");
          form.reset();
      });
  }
});

// Fade-In Effect
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  containers.forEach(container => {
      container.style.opacity = "0";
      container.style.transition = "opacity 1s";

      setTimeout(() => {
          container.style.opacity = "1";
      }, 300);
  });
});