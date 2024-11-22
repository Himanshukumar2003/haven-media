// Initialize Swiper for Clients-revies carousel
const swiperClientsReviews = new Swiper('.Clients-revies-swiper', {
    spaceBetween: 20,
    autoplay: {
        delay: 2000
    },
    speed: 2000,
    navigation: {
        nextEl: '.swiper-next-btn',
        prevEl: '.swiper-prev-btn',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // Large screens (lg)
        992: {
            slidesPerView: 2,
        },
        // Medium screens (md)
        768: {
            slidesPerView: 1,
        },

    }
});




$(function () {
    var swiperTestimonials = new Swiper('#swiperTestimonials', { // Use an ID here
        autoplay: {
            delay: 2000
        },
        speed: 2000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: false,
        grabCursor: true,
        breakpoints: {
            360: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '#swiperNextBtn', // Use an ID here
            prevEl: '#swiperPrevBtn', // Use an ID here
        },
        pagination: {
            el: '#swiperPagination', // Use an ID here
            clickable: true,
        },
    });
});





$(function () {
    var swiperTestimonials = new Swiper('#clients-swiper', { // Use an ID here
        autoplay: {
            delay: 3000
        },
        speed: 3000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: false,
        grabCursor: true,
        breakpoints: {
            360: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            }
        },
        navigation: {
            nextEl: '.swiper-next-btn', // Use an ID here
            prevEl: '.swiper-prev-btn', // Use an ID here
        },
        pagination: {
            el: '.swiperPagination',
            clickable: true,
        },
    });
});
