$(document).ready(resize);
$(window).resize(resize);

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
  $(".grid__row--absolute").css({"padding": gridUnit/1.5 + "%"});


  var left = {"right": -1 * IW + "px"};
  var position = { "width": IW,
                   "top": $(".grid__row--fixed").innerHeight() + "px"};

  //Spacing
  $(".container__grid--mid").css({"padding": gridUnit + "% 0"});
  $(".container__slideshow").css({"padding-right": 0});
  $(".container__grid--foot").css({"padding-bottom": ($(".grid__row--fixed").innerHeight())/2 + "px",
                                   "padding-top": ($(".grid__row--fixed").innerHeight()) + "px"});
  $(".container__header").css({"bottom": gridUnit + "%"});
  $(".img--hover").css({"margin": "0 " + gridUnit/16 + "%",
                        "margin-top": $(window).innerHeight()*1/12*0.005 + "%",
                        "margin-bottom": $(window).innerHeight()*-1/12*0.005 + "%"});

  //Type
  $(".title--serif-head").css({"margin-top": gridUnit*1.5 + "%"});
  $(".title--sans-mid").css({"padding": gridUnit/15 + "% 0 " + gridUnit/3 + "% 0"});
  $(".caption").css({"margin": gridUnit/2 + "% 0"});

   if(IW < 1400) {
     $(".container__slideshow").css({"padding": "0 " + gridUnit/24 + "%"});
     $(".grid__row--fixed").css({"width": gridUnit*0.11*IW + "px"});
     $(".container__grid--foot").css({"padding-bottom": ($(".grid__row--fixed").innerHeight())/2 + "px",
                                      "padding-top": ($(".grid__row--fixed").innerHeight()) + "px"});
     $(".grid__col").css({"margin": "0 " + gridUnit/8 + "%"});
   }
   if(IW < 667) {
     $(".title--sans-head").css({"margin-bottom": gridUnit*4 + "%"});
     $(".title--sans-mid").css({"padding": gridUnit/2 + "% 0 0 0"});
     $(".caption").css({"padding-left": gridUnit/2 + "%"});
     $(".link--text--mobile").css({"margin-bottom": gridUnit*2 + "%"});
     $(".container__grid--mid").css({"padding": gridUnit*1.5 + "% 0"});
     $(".container__text--foot-right").css({"margin-top": gridUnit + "%"});
     $(".container__grid--foot").css({"padding-top": ($(".grid__row--fixed").innerHeight())*1.5 + "px"});
     $(".container__grid--absolute").addClass("hide");
     $(".slideshow").css({"padding": 0,
                          "margin-right": 0});
     $(".img--hover").css({"margin": 0,
                           "margin-top": gridUnit + "%",
                           "margin-bottom": gridUnit*1.5 + "%"});
   }

   $(".grid__row--spacer").css({"height": IW*gridUnit*0.015 + "px"}); //basically the height of fixed nav
   $(".grid__row--spacer-small").css({"height": IW*gridUnit*0.002 + "px"}); //basically the height of fixed nav

   $(".container__grid--head").css({"height": IH});
   $(".grid__col--IH").css({"height": IH});
   $(".container__grid--replacement").css({"height": $(".container__grid--absolute").innerHeight() - $(".container__grid--head").innerHeight() + $(".grid__row--fixed").innerHeight() });

   $(".container__grid--absolute").css(left);
   $(".container__grid--absolute").css(position);
}

//About section
//-
$("#link--about").click(function () {

    $(".container__grid--absolute").toggleClass("right left");
    $(".container__grid--mid").toggleClass("hide");
    $(".container__header").toggleClass("hide");
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
    if($(".container__header").length > 0) {
        $(".container__header").removeClass("hide");
    }
});
