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
$("#slideshowTop").click(function () {
    $(".slideshow--top").toggleClass("positionAuto");
});

$("#slideshowBottom").click(function () {
    $(".slideshow--bottom").toggleClass("positionAuto");
});


$(".slideshow--top").mouseover(function() {
  $(".slideshow__controls--top").toggleClass("hide");
});
$(".slideshow--top").mouseout(function() {
  $(".slideshow__controls--top").toggleClass("hide");
});

$(".slideshow--bottom").mouseover(function() {
  $(".slideshow__controls--bottom").toggleClass("hide");
});
$(".slideshow--bottom").mouseout(function() {
  $(".slideshow__controls--bottom").toggleClass("hide");
});
