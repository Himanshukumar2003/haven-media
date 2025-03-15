document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper("#clients-swiper", {
      loop: false,
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
      autoplay: false, 
      breakpoints: {
        
          0: {   // Medium screens
              slidesPerView: 2,
              spaceBetween: 20
          },
          1024: {  // Large screens
              slidesPerView: 4,
              spaceBetween: 20
          }
      }
  });
});
