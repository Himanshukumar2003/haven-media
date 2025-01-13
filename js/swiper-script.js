$(function () {
    var swiperTestimonials = new Swiper('#clients-swiper', {
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        dots: true,
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
            },
        },
        navigation: {
            nextEl: '.swiper-next-btn',
            prevEl: '.swiper-prev-btn',
        },
        pagination: {
            el: '.swiperPagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                updateNavigationButtons(this);
            },
            init: function () {
                updateNavigationButtons(this); // Ensure buttons are updated on initialization
            },
        },
    });

    function updateNavigationButtons(swiper) {
        const prevButton = $(swiper.navigation.prevEl);
        const nextButton = $(swiper.navigation.nextEl);

        // Enable or disable the "Previous" button
        if (swiper.isBeginning) {
            prevButton.addClass('disabled').prop('disabled', true);
        } else {
            prevButton.removeClass('disabled').prop('disabled', false);
        }

        if (swiper.isEnd) {
            nextButton.addClass('disabled').prop('disabled', true);
        } else {
            nextButton.removeClass('disabled').prop('disabled', false);
        }
    }
});
