//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(mobileClick);
// $(window).load(mobileClick);​

$(document).ready(resize);
$(window).resize(resize);

function mobileClick() {
  if(($(window).innerWidth()) < 667) {
    $(".container__grid--absolute").addClass("hide");
    $(".img-svg__white-large").addClass("hide");
    $(".img-svg__black--small").addClass("hide");
    $("ul").css({"padding": "0px " + 100/24 + "%"});
    $(".caption--small-date").css({"margin-bottom": 100/6 + "%",});
    $(".title--sans-mid").css({"margin-top": 100/10 + "%",
                               "margin-bottom": 100/12 + "%",});
  }
}

//Text toggling
//-
$.fn.toggleText = function(t1, t2){
  if (this.text() == t1) this.text(t2);
  else                   this.text(t1);
  return this;
};

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;

  var gridUnit = 100/12;

  for (var i = 0; i < 13; i++){
      $(".grid__col--"+i).css({"width": gridUnit * i + "%"});
  }

  //Grids
  $(".grid__row").css({"padding": "0 " + gridUnit/2 + "%"});
  $(".grid__row--fixed").css({"padding-bottom": gridUnit/2 + "%",
                              "padding-top": gridUnit/2 + "%",
                              "width": gridUnit*11 + "%"});
  $(".grid__col").css({"margin": "0 " + gridUnit/16 + "%"});
  $(".grid__row--switch").css({"padding-left": gridUnit/2.3 + "%"});
  $(".grid__row--absolute").css({"padding": gridUnit/1.5 + "%"});


  var left = {"right": -1 * IW + "px"};

  var position = { "width": IW,
                   "top": $(".grid__row--fixed").innerHeight() + "px"};

  var positionSlideshow = {"margin-left": (-1*(($(".grid__row").innerWidth())*gridUnit*0.23))/2 + "px"};

  //Spacing
  $(".container__grid--mid").css({"padding": gridUnit + "% 0"});
  $(".container__grid--foot").css({"padding-bottom": ($(".grid__row--fixed").innerHeight())/2 + "px",
                                   "padding-top": ($(".grid__row--fixed").innerHeight()) + "px"});
  $(".slideshow__controls--left").css({"left": gridUnit/4 + "%"});
  $(".slideshow__controls--right").css({"right": gridUnit/4 + "%"});
  $(".container__header").css({"bottom": gridUnit + "%"});
  $(".img--hover").css({"margin-top": $(window).innerHeight()*1/12*0.005 + "%",
                        "margin-bottom": $(window).innerHeight()*-1/12*0.005 + "%"});

  //Type
  $(".title--serif-head").css({"margin-top": gridUnit*1.5 + "%"});
  $(".title--sans-mid").css({"padding": gridUnit/15 + "% 0 " + gridUnit/3 + "% 0"});
  $(".caption").css({"margin": gridUnit/2 + "% 0"});

   if(IW < 1400) {
     $(".slideshow__controls").css({"margin-top": ($(".grid__row--switch").innerHeight())*gridUnit*0.06 + "px"});
     $(".grid__row--fixed").css({"width": gridUnit*0.11*IW + "px"});
     $(".grid__row--switch").css({"width": ($(".grid__row").innerWidth())*gridUnit*0.22 + "px"});
     $(".container__grid--foot").css({"padding-bottom": ($(".grid__row--fixed").innerHeight())/2 + "px",
                                      "padding-top": ($(".grid__row--fixed").innerHeight()) + "px"});
     $(".grid__col").css({"margin": "0 " + gridUnit/8 + "%"});
   }
   if(IW < 667) {
     $(".grid__row--switch").css({"width": IW + "px"});
     $(".title--sans-head").css({"margin-bottom": gridUnit*3 + "%"});
     $(".link--text--mobile").css({"margin-bottom": gridUnit*1.5 + "%"});
     $(".container__text--foot-right").css({"margin-top": gridUnit + "%"});
     $(".container__grid--foot").css({"padding-top": ($(".grid__row--fixed").innerHeight())*1.5 + "px"});
    //  $(".container__grid--absolute").addClass("hide");
   }
   if (IW > 1400) {
     $(".slideshow__controls").css({"margin-top": ($(".grid__row--switch").innerHeight())*gridUnit*0.07+ "px"});
     $(".grid__row--switch").css({"width": ($(".grid__row").innerWidth())*gridUnit*0.22 + "px"});
   }

   $(".grid__row--spacer").css({"height": IW*gridUnit*0.015 + "px"}); //basically the height of fixed nav
   $(".grid__row--spacer-small").css({"height": IW*gridUnit*0.002 + "px"}); //basically the height of fixed nav

   $(".container__grid--head").css({"height": IH});
   $(".grid__col--IH").css({"height": IH});
   $(".container__grid--replacement").css({"height": $(".container__grid--absolute").innerHeight() - $(".container__grid--head").innerHeight() + $(".grid__row--fixed").innerHeight() });

   $(".container__grid--absolute").css(left);
   $(".container__grid--absolute").css(position);

   $(".grid__row--switch").css(positionSlideshow);
}

//About section
//-
$("#link--about").click(function () {

    $(".container__grid--absolute").toggleClass("right left");
    $(".container__grid--mid").toggleClass("hide");
    $(".container__header").toggleClass("hide");
    $(".container__grid--replacement").toggleClass("hide");
});

$("#link--about-mobile").click(function () {

    $(".container__grid--absolute").toggleClass("right left");
    $(".container__grid--mid").toggleClass("hide");
    $(".container__header").toggleClass("hide");
    $(".container__grid--replacement").toggleClass("hide");
    $(".container__grid--absolute").toggleClass("hide");
    $(".link--text--mobile").toggleClass("nopadding");
    $(".link--text--mobile").find(".img-svg__black--small").toggleClass("img-svg__black--small-rotate");
    $(this).toggleText('Read More', 'Read Less');

});


$("#link--home").click(function () {
    $(".container__grid--absolute").removeClass("right left");
    if($(".container__grid--mid").length > 0) {
        $(".container__grid--mid").removeClass("hide");
    }
    if($(".container__grid--replacement").length > 0) {
        $(".container__grid--replacement").addClass("hide");
    }
    if($(".container__header").length > 0) {
        $(".container__header").removeClass("hide");
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

//img move
//-


$(".img--hover").mouseover(function() {
  $(this).css({"margin-top": $(window).innerHeight()*-1/12*0.005 + "%",
               "margin-bottom": $(window).innerHeight()*1/12*0.005 + "%"});
});
$(".img--hover").mouseout(function() {
  $(this).css({"margin-top": $(window).innerHeight()*1/12*0.005 + "%",
               "margin-bottom": $(window).innerHeight()*-1/12*0.005 + "%"});
});
