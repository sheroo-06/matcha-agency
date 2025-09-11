const images = document.querySelectorAll(".slider-image");
const leftArrow = document.getElementById("slider-left");
const rightArrow = document.getElementById("slider-right");
let current = 0;

function showImage(idx) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

leftArrow.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});
rightArrow.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});



document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    // Open menu
    hamburger.addEventListener("click", () => {
      menu.classList.add("show");
      overlay.classList.add("show");
    });

    // Close menu
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("show");
      overlay.classList.remove("show");
    });

    overlay.addEventListener("click", () => {
      menu.classList.remove("show");
      overlay.classList.remove("show");
    });