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