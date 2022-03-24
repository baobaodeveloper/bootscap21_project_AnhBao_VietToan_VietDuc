const menuBtn = document.getElementById("menu-button");
const navList = document.querySelector(".navbar__list");
const closBtn = document.getElementById("close-button");
menuBtn.addEventListener("click", () => {
  navList.classList.add("active");
});

closBtn.addEventListener("click", () => {
  navList.classList.remove("active");
});

let swiper = new Swiper(".testimonial__list", {
  pagination: {
    el: ".swiper-pagination",
    loop: true,
  },
});
