//Window resize content - fuck pixel perfection, aint nobody be able to control everything
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;

   $(".grid__row--spacer" ).css({"height": IW*0.1245 + "px"});
  //  $(".grid__row--fixed" ).css({"width": $(".grid__col--12").innerWidth() / IW * 100 + 4.15 + "%" });
}


console.log("loading");
