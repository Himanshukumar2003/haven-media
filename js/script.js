

window.onscroll = function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 100) {
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
  }
};



// Handle navbar transparency on scroll
window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Check if menu is open
  const isMenuOpen = navbarToggler.getAttribute("aria-expanded") === "true";

  if (window.scrollY > 100 || isMenuOpen) {
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
  }
};


$(function () {
  $(".navbar-toggler").on("click", function () {
    const navbar = document.getElementById("navbar");

    // Toggle the 'open' class for the button (optional visual effect)
    $(this).toggleClass("open");

    // Change navbar background color based on menu state
    if ($(this).attr("aria-expanded") === "true") {
      navbar.classList.add("bg-white"); // Add white background
      navbar.classList.remove("bg-red-color"); // Remove red background
    } else {
      navbar.classList.remove("bg-white"); // Remove white background
      navbar.classList.add("bg-red-color"); // Add red background
    }
  });
});


