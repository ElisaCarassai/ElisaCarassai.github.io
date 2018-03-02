//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;

  var left = {"right": -1 * IW + "px"};

  var position = { "width": IW,
                   "top": $(".grid__row--fixed").innerHeight() + "px"};
  var positionSlideshow = {"margin-left": (-1*(($(".grid__row").innerWidth())*1.917))/2 + "px"};


   $(".slideshow__controls").css({"margin-top": ($(".grid__row--switch").innerHeight())*1.207 + "px"});
   $(".slideshow__controls--top").css({"margin-top": ($(".grid__row--switch").innerHeight())*0.6035 + "px"});
   $(".grid__row--spacer").css({"height": IW*0.1245 + "px"});
   $(".grid__row--switch").css({"width": ($(".grid__row").innerWidth())*1.917 + "px"});
   $(".container__grid--absolute").css(left);
   $(".container__grid--absolute").css(position);

   $(".grid__row--switch").css(positionSlideshow);
}

//About section
//-
$("#link--about").click(function () {
    $(".container__grid--absolute").toggleClass("right left");
});


//Gallery / slideshow
//-

//show controls
$(".slideshow--top").mouseover(function() {
  if ($(this).hasClass("positionAuto")) {
    $(".slideshow__controls--top.slideshow__controls--right").toggleClass("hide");
  }
  else {
    $(".slideshow__controls--top.slideshow__controls--left").toggleClass("hide");
  }
});

$(".slideshow--bottom").mouseover(function() {
  if ($(this).hasClass("positionAuto")) {
      $(".slideshow__controls--bottom.slideshow__controls--right").toggleClass("hide");
  }
  else {
    $(".slideshow__controls--bottom.slideshow__controls--left").toggleClass("hide");
  }
});

//click controls
$("#slideshowTopRight").click(function () {
    $(".slideshow--top").removeClass("positionAuto");
});

$(".slideshow__controls--bottom.slideshow__controls--right").click(function () {
    $(".slideshow--bottom").removeClass("positionAuto");
});

$("#slideshowTopLeft").click(function () {
    $(".slideshow--top").addClass("positionAuto");
});

$(".slideshow__controls--bottom.slideshow__controls--left").click(function () {
    $(".slideshow--bottom").addClass("positionAuto");
});
