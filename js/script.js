$(document).ready(function() {
  //Run functions on page load
  adjust_navbar();
  change_navbar_color();

  //Run functions on page resize
  $(window).resize(function() {
    adjust_navbar();
  });

  $("#btn-menu-bar").click(function() {
    let current_state = $("#btn-menu-bar").attr("data-state");
    if(current_state === "closed") {
      $(".background-black").css("z-index","2000");
      $(".background-black").css("background-color","rgba(0,0,0,0.8)");
      $(".fixed-navigation .menu-collapse").css("display","block");
      $(".fixed-navigation .menu-collapse").removeClass("animation-fadeoutup");
      $(".fixed-navigation .menu-collapse").addClass("animation-fadeindown");
      $("#polygon").css("opacity","0");
      $("#menu-text tspan").text("CLOSE");
      $("#btn-menu-bar").attr("data-state","open");
    } else {
      $(".background-black").css("z-index","0");
      $(".background-black").css("background-color","rgba(0,0,0,0.6)");
      $(".fixed-navigation .menu-collapse").removeClass("animation-fadeindown");
      $(".fixed-navigation .menu-collapse").addClass("animation-fadeoutup");
      setTimeout(function() {
        $(".fixed-navigation .menu-collapse").css("display","none");
      }, 300);
      $("#polygon").css("opacity","1");
      $("#menu-text tspan").text("MENU");
      $("#btn-menu-bar").attr("data-state","closed");
    }
  });

  $(".missions").owlCarousel({
    nav: true,
    dots: true,
    items: 1
  });

  $(".gallery1").owlCarousel({
    nav: true,
    dots: true,
    margin:10,
    items: 2
  });

  $(".gallery2").owlCarousel({
    nav: true,
    dots: true,
    margin: 10,
    items: 2
  });
});

function adjust_navbar() {
  let window_width = window.innerWidth;
  if(window_width > 425) {
    $("#menu-text").css("display","block");
    $("#menu-line").attr("width","536.495");
    $("#menu-line").attr("x","310.27");
  } else {
    $("#menu-text").css("display","none");
    $("#menu-line").attr("width","101.786");
    $("#menu-line").attr("x","796.786");
  }
}

function change_navbar_color() {
  $(window).scroll(function() {
    var aTop = $(".whoweare").height();
    if($(this).scrollTop()>=aTop) {
      $("#btn-menu-bar .menu-image-container svg g").css("fill","black");
      $(".fixed-navigation .menu-collapse ul a li").css("black");
    } else {
      $("#btn-menu-bar .menu-image-container svg g").css("fill","white");
      $(".fixed-navigation .menu-collapse ul a li").css("white");
    }
  });
}
