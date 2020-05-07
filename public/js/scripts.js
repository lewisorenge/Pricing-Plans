$(document).on('ready', function () {
    $(".covid-slider").slick({
        arrows: false,
        autoplay: false,
        infinite: false,
        lazyLoad: 'progressive',
        variableWidth: true,
        swipeToSlide: true,
        slidesToScroll: 1,
        adaptiveHeight: false
    });
});
