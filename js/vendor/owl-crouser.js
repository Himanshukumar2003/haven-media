$(document).ready(function () {
    $('#custom-carousel').owlCarousel({
        loop: true,              // Infinite loop for smooth scrolling
        margin: 20,              // Space between carousel items
        autoplay: true,          // Enable auto-scroll
        autoplayTimeout: 2000,   // Time interval in milliseconds
        autoplayHoverPause: false, // Prevent pausing on hover
        responsive: {            // Configure item count based on screen size
            0: {
                items: 1         // Show 1 item for small screens
            },
            600: {
                items: 3         // Show 3 items for medium screens
            },
            1000: {
                items: 7        // Show 5 items for large screens
            }
        }
    });
});
















$(document).ready(function () {
    const heroCarousel = $(".hero_carosel");

    heroCarousel.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>"
        ]
    });

    heroCarousel.on("changed.owl.carousel", function (event) {
        const $currentSlide = $(event.target).find(".owl-item").eq(event.item.index);
        $currentSlide.find(".slide-text").addClass("fade-in").removeClass("fade-out");
    });

    heroCarousel.on("change.owl.carousel", function (event) {
        const $currentSlide = $(event.target).find(".owl-item").eq(event.item.index);
        $currentSlide.find(".slide-text").removeClass("fade-in").addClass("fade-out");
    });
});