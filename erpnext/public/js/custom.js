$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 1000,
        autoPlaySpeed: 1000,
        navSpeed: 1000,
        autoplayHoverPause: false,
        items: 2,
        tabletLandscape: 2,
        tabletPortrait: 2,
        mobileLandscape: 2,
        mobilePortrait: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: false,
        loop: true,
        // responsive: {
        //     0: { items: 1 },
        //     480: { items: 2 },
        //     575: { items: 2 },
        //     768: { items: 2 },
        //     991: { items: 3 },
        //     1200: { items: 4 }
        // }
    });
});
