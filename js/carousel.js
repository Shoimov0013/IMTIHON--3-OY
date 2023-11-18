$(document).ready(function () {
    $(".owl-carousel-1").owlCarousel({
        loop: true,
        nav: true,
        navText: [
            "<img src='img/carusel.left.svg'/>",
            "<img src='img/carusel.right.svg'/>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            900: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });
});

$(document).ready(function () {
    $(".owl-carousel-2").owlCarousel({
        loop: true,
        nav: true,
        navText: [
            "<img src='img/carusel.left.svg'/>",
            "<img src='img/carusel.right.svg'/>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});
