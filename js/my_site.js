
$(document).ready(function($){
 $("#home-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
  });

  $("#project-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });

  $("#about-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
  });

  var $window = $(window);

  $('section[data-type="background"]').each(function(){
  var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
    });
  });
});

 var iScrollPos = 0
 $(window).scroll(function() {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos <= 940) {
      $("#title").text("Matias Meneses")
    } else if (iCurScrollPos >= 940 && iCurScrollPos < 1940)
    {
      $("#title").text("About Me")
    } else {
      $("#title").text("Work")
    }
    if (iCurScrollPos >=1000 ) {
      $(".about-title").css("display","none")
    } else {
      $(".about-title").css("display","inline")
    }

    if (iCurScrollPos >=2000) {
      $(".work-title").css("display","none")
    } else {
      $(".work-title").css("display","inline")
    }
 });

 // PROJECT SLIDER

var prev, next;

function init(){
  var elem = $(".projects-main-container")
  elem.scrollLeft(550)
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  prev.onclick = function(){ onClickPrev();};
  next.onclick = function(){ onClickNext();};
}

function onClickPrev(){
  var elem = $(".projects-main-container")
  var left = elem.scrollLeft()
  elem.animate({scrollLeft: left - 550},{complete:function(){
    console.log(left)
    if(left === 550){
      $(this).scrollLeft(2200)
    }
  }})
}

function onClickNext(){
  var elem = $(".projects-main-container")
  var left = elem.scrollLeft()
  elem.animate({scrollLeft: left + 550},{complete:function(){
    console.log(left)
    if(left === 2200){
      $(this).scrollLeft(550)
    }
  }})
}

window.onload = init;
