const menuBtn = document.getElementById("menu-button");
const navList = document.querySelector(".navbar__list");
menuBtn.addEventListener("click", () => {
  navList.classList.add("active");
});
