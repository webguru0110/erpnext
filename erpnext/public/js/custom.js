

$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        autoPlaySpeed: 500,
        navSpeed: 1000,
        autoplayHoverPause: false,
        // items: 2,
        tabletLandscape: 2,
        tabletPortrait: 2,
        mobileLandscape: 2,
        mobilePortrait: 1,
        stagePadding: 20,
        center: false,
        nav: false,
        margin: 20,
        stagePadding: 0,
        dots: false,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 2 },
            1200: { items: 2 }
        }
    });
});
