  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper("#clients-swiper", {
      loop: true, 
      spaceBetween: 20, 
      slidesPerView: 4, 
      navigation: {
        nextEl: ".swiper-next-btn",
        prevEl: ".swiper-prev-btn",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay:800, 
        disableOnInteraction: false,
      },
    });
  });
