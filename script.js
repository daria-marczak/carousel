$(function() {

    var width = 640;
    var animationSpeed = 1000;
    var pause = 4000;
    var currentSlide = 1;

    var $carousel = $("#carousel");
    var $carouselInner = $carousel.find("ul");
    var $slide = $carouselInner.find("li");

    var interval;

    var $prev = $("#prev");
    var $next = $("#next");

    function changeSlide() {
        currentSlide++;
        if (currentSlide === $slide.length) {
            currentSlide = 1;
            $carouselInner.css("margin-left", 0)
        };
    };

    function previousSlide() {
        currentSlide--;
        if (currentSlide === $slide.length) {
            $carouselInner.css("margin-left", width)
        };
    }

    function startSlider() {
        interval = setInterval(function() {
            $carouselInner.animate({
                "margin-left": "-=" + width
            }, animationSpeed, changeSlide(), pause);
        });
    };

    function stopSlider() {
        clearInterval(interval);
    }

    $next.on("click", changeSlide());

    $prev.on("click", previousSlide());

    $carousel.on("mouseenter", stopSlider()).on("mouseleave", startSlider());

    startSlider();

});
