const menuBtn = document.getElementById("menu-button");
const navList = document.querySelector(".navbar__list");
const closBtn = document.getElementById("close-button");
menuBtn.addEventListener("click", () => {
  navList.classList.add("active");
});

closBtn.addEventListener("click", () => {
  navList.classList.remove("active");
});

let demo = new CountUp("count__number", 7090);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}
