$(function() {
  var width = 640;
  var animationSpeed = 500;
  var pause = 1000;

  var $carousel = $("#carousel");
  var $carouselInner = $carousel.find("ul");

  var interval;

  var $prev = $("#prev");
  var $next = $("#next");

  function moveFirstSlide() {
      var first = $carousel.find('li:first');
      var last = $carousel.find('li:last');
      last.after(first);
      $carouselInner.css("margin-left", 0);

    };

    function previousSlide() {
      stopSlider();
      var first = $carousel.find('li:first');
      var last = $carousel.find('li:last');
      first.before(last);
      $carouselInner.css("margin-left", -width);

      $carouselInner.animate({
          "margin-left": 0
      }, animationSpeed, startSlider);

    }


    function changeSlide() {
      $carouselInner.animate({
          "margin-left": "-=" + width
      }, animationSpeed, moveFirstSlide);
    }

    function startSlider() {
        clearInterval(interval);
        interval = setInterval(changeSlide, pause);
    };

    function stopSlider() {
        clearInterval(interval);
    }

    $next.click(changeSlide);

    $prev.click(previousSlide);

    $carousel.on("mouseenter", stopSlider).on("mouseleave", startSlider);

    startSlider();
  });
