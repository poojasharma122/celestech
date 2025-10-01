// Header Scroll JS Start
$(document).ready(function () {
  $(window).on("scroll", function () {
      var header = $(".sticky-header"); // target header correctly
      if ($(window).scrollTop() > 0) {
          header.addClass("fixed_header");
      } else {
          header.removeClass("fixed_header");
      }
  });
});

  // Header Scroll JS End