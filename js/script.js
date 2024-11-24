

// Handle navbar transparency on scroll
window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Check if menu is open
  const isMenuOpen = navbarToggler.getAttribute("aria-expanded") === "true";

};


$(function () {
  $(".navbar-toggler").on("click", function () {
    const navbar = document.getElementById("navbar");

    $(this).toggleClass("open");
  });
});


