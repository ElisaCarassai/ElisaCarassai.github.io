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

   if(IW < 1440) {
     $(".slideshow__controls").css({"margin-top": ($(".grid__row--switch").innerHeight())*0.5 + "px"});
   }
   else {
     $(".slideshow__controls").css({"margin-top": ($(".grid__row--switch").innerHeight())*0.6035 + "px"});
   }
   $(".grid__row--spacer").css({"height": IW*0.1245 + "px"}); //basically the height of fixed nav
   $(".container__grid--replacement").css({"height": $(".container__grid--absolute").innerHeight() - $(".container__grid--head").innerHeight() + $(".grid__row--fixed").innerHeight() });
   $(".grid__row--switch").css({"width": ($(".grid__row").innerWidth())*1.917 + "px"});
   $(".container__grid--absolute").css(left);
   $(".container__grid--absolute").css(position);

   $(".grid__row--switch").css(positionSlideshow);
}

//About section
//-
$("#link--about").click(function () {
    $(".container__grid--absolute").toggleClass("right left");
    $(".container__grid--mid").toggleClass("hide");
    $(".container__grid--replacement").toggleClass("hide");
});

$("#link--home").click(function () {
    $(".container__grid--absolute").removeClass("right left");
    if($(".container__grid--mid").length > 0) {
        $(".container__grid--mid").removeClass("hide");
    }
    if($(".container__grid--replacement").length > 0) {
        $(".container__grid--replacement").addClass("hide");
    }
});


//Gallery / slideshow
//-

//hover, show and hide controls
$(".slideshow").mouseover(function() {
  if ($(this).hasClass("positionAuto")) {
    $(this).find(".slideshow__controls.slideshow__controls--right").css({"visibility": "visible"});
  }
  else {
    $(this).find(".slideshow__controls.slideshow__controls--left").css({"visibility": "visible"});
  }
});
$(".slideshow").mouseout(function() {
    $(this).find(".slideshow__controls.slideshow__controls--right").css({"visibility": "hidden"});
    $(this).find(".slideshow__controls.slideshow__controls--left").css({"visibility": "hidden"});
});

//click controls
$(".slideshow__controls--right").click(function () {
    $(this).parent(".slideshow").removeClass("positionAuto");
});

$(".slideshow__controls--left").click(function () {
    $(this).parent(".slideshow").addClass("positionAuto");
});
