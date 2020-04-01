$(document).ready(function () {
    //side-bar
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
    });
    $(".nav-links").click(function (e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////
    // search
    // Mobile Search 
    $('.search-btn').click(function () {
        $('.search-pop').slideDown(500);
        $('body').css("overflow", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').slideUp(500);
        $('body').css("overflow-x", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////
    // Accordion
    // if ($(window).width() <= 767) {
    //     $(".foot-nav-links-header").addClass("mo-accordion");
    //     $(".foot-links").addClass("mo-panel");

    //     $(".newsletter-head").addClass("mo-accordion");
    //     $(".news-body").addClass("mo-panel");
    // }
    // var acc = document.getElementsByClassName("mo-accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function () {
    //         this.classList.toggle("mo-active");
    //         var panel = this.nextElementSibling;
    //         if (panel.style.maxHeight) {
    //             panel.style.maxHeight = null;
    //         } else {
    //             panel.style.maxHeight = panel.scrollHeight + "px";
    //         }
    //     });
    // }
    ////////////////////////////////////////////////////////////
    var swiper = new Swiper('.add-news-slider .swiper-container', {
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.add-news-slider .swiper-button-next',
            prevEl: '.add-news-slider .swiper-button-prev',
        },
        pagination: {
            el: '.add-news-slider .swiper-pagination',
            clickable: true,
        },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs .swiper-container', {
        spaceBetween: 4,
        slidesPerView: 5,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.gallery-thumbs .swiper-button-next',
            prevEl: '.gallery-thumbs .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    var galleryTop = new Swiper('.gallery-top .swiper-container', {
        spaceBetween: 10,
        autoHeight: false,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: galleryThumbs,
        },

    });
    //map
    var adresse = "";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,

        center: new google.maps.LatLng($("#map").attr("lat"), $("#map").attr("long")),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: 'images/pin.png',
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
});