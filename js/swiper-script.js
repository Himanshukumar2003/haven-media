    document.addEventListener("DOMContentLoaded", function () {
        var swiper = new Swiper("#clients-swiper", {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            breakpoints: {
                768: {
                    slidesPerView: 4
                },
                1024: {
                    slidesPerView: 5
                }
            },
            on: {
                init: function () {
                    AOS.refresh(); 
                },
                slideChangeTransitionEnd: function () {
                    AOS.refresh(); 
                }
            }
        });

        AOS.init(); 
    });
