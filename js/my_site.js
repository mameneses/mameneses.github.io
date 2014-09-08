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

  var $window = $(window); //You forgot this line in the above example

  $('section[data-type="background"]').each(function(){
  var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
  // Put together our final background position
      var coords = '50% '+ yPos + 'px';
  // Move the background
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
      $("#title").text("Projects")
    }
    if (iCurScrollPos >=1000 ) {
      $(".about-title").css("display","none")
    } else {
      $(".about-title").css("display","inline")
    }

    if (iCurScrollPos >=2000) {
      $(".project-title").css("display","none")
    } else {
      $(".project-title").css("display","inline")
    }
 });

 // PROJECT SLIDER

var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;


function init(){
  ul = document.getElementById('image_slider');
  li_items = ul.children;
  imageNumber = li_items.length;
  imageWidth = li_items[0].children[0].clientWidth;
  ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  //.onclike = slide(-1) will be fired when onload;
  /*
  prev.onclick = function(){slide(-1);};
  next.onclick = function(){slide(1);};*/
  prev.onclick = function(){ onClickPrev();};
  next.onclick = function(){ onClickNext();};
}

function animate(opts){
  var start = new Date;
  var id = setInterval(function(){
    var timePassed = new Date - start;
    var progress = timePassed / opts.duration;
    if (progress > 1){
      progress = 1;
    }
    var delta = opts.delta(progress);
    opts.step(delta);
    if (progress == 1){
      clearInterval(id);
      opts.callback();
    }
  }, opts.delay || 17);
  //return id;
}

function slideTo(imageToGo){
  var direction;
  var numOfImageToGo = Math.abs(imageToGo - currentImage);
  // slide toward left

  direction = currentImage > imageToGo ? 1 : -1;
  currentPostion = -1 * currentImage * imageWidth;
  var opts = {
    duration:1000,
    delta:function(p){return p;},
    step:function(delta){
      ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
    },
    callback:function(){currentImage = imageToGo;}  
  };
  animate(opts);
}

function onClickPrev(){
  if (currentImage == 0){
    slideTo(imageNumber - 1);
    $("[id='" + currentImage.toString() +"']").css("display","none")
    $("[id='" + (imageNumber - 1).toString() +"']").css("display","inline")

  }     
  else{
    slideTo(currentImage - 1);
    $("[id='" + currentImage.toString() +"']").css("display","none")
    $("[id='" + (currentImage - 1).toString() +"']").css("display","inline")
  }   
}

function onClickNext(){
  if (currentImage == imageNumber - 1){
    slideTo(0);
    $("[id='" + currentImage.toString() +"']").css("display","none")
    $("[id='0']").css("display","inline")
  }   
  else{
    slideTo(currentImage + 1);
    $("[id='" + currentImage.toString() +"']").css("display","none")
    $("[id='" + (currentImage + 1).toString() +"']").css("display","inline")
  }   
}

window.onload = init;