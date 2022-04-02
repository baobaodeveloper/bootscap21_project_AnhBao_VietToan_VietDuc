// *: Header Shrink on scroll effect
$(window).on("scroll", () => {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("is-fixed");
  } else {
    $("header").removeClass("is-fixed");
  }
});
// *: End

// *: Move To Top
const moveToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
// *: End
