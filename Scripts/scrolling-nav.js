//jQuery to collapse the navbar on scroll
//$(window).scroll(function() {
//    if ($(".navbar").offset().top > 50) {
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//    } else {
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//    }
//});

////jQuery for page scrolling feature - requires jQuery Easing plugin
//$(function() {
//    $('a.page-scroll').bind('click', function(event) {
//        var $anchor = $(this);
//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top
//        }, 1500, 'easeInOutExpo');
//        event.preventDefault();
//    });
//});



$(document).ready(function () {

    $('a[href^="#"]').on('click', function (e) {

        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        //scroll and show hash

        $('html, body').animate({

            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {

            window.location.hash = target;
        })

    })
});
