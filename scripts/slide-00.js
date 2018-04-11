//Slidshos controls
//-
$(document).ready(function(){
  $(".slideshow").slick({
    infinite: false,
    responsive: [
          {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 667,
          settings: "unslick" // destroys slick
        }
      ]
    });
});
