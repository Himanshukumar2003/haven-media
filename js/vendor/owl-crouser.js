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