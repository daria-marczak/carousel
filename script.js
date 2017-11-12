setInterval(function() {
    console.log
})


$(function(){
	console.log('DOM loaded - you can have fun');
});

$(function(){

        var width = 640;
        var animationSpeed = 1000;
        var pause = 3000;
        var currentSlide = 1;

        var $carousel = $("#carousel");
        var $carouselInner = $carousel.find("ul");
        var $slide = $carouselInner.find("li");

        var interval;

        var $prev = $("#prev");
        var $next = $("next");

        function startSlider() {
            interval = setInterval(function() {
                $carouselInner.animate({"margin-left": "-=" +width}, animationSpeed, function() {
                    currentSlide++;
                    if (currentSlide === $slide.length) {
                        currentSlide = 1;
                        $carouselInner.css("margin-left", 0);
                    }
                });
            }, pause);
        }

        function stopSlider() {
            clearInterval(interval);
        }

        function nextSlide() {
            $next.click(function() {
                currentSlide++;
                if (currentSlide === $slide.length) {
                    currentSlide = 1;
                    $carouselInner.css("margin-left", 0);
                }
            })
        }


        $carousel.on("mouseenter", stopSlider).on("mouseleave", startSlider);
});
