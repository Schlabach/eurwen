// Redirect to login if not authenticated
// if (sessionStorage.getItem("auth") !== "true") {
//   window.location.href = "/index.html";
// }

// Always show main content
document.addEventListener("DOMContentLoaded", () => {
  showContent();
});

// Page navigation function
function goTo(page) {
  window.location.href = page;
}
function goTo(page) {
  window.location.href = page;
}
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  if (!slides.length) return;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  if (!slides.length) return;

  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  if (!slides.length) return;

  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
