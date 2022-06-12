$(document).ready(() =>{
  $('.slider').slick({
    arrows:false,
    dots:true,
    adaptiveHight:true,
    speed:800,
    easing:'ease',
    initialSlide:1,
    autoplay:true,
    autoplaySpeed:3000,
    draggable:true,
    swipe:true,
    waitForAnimate:false,
  });
});

$(document).ready(() =>{
  $('.mobile__slider').slick({
    arrows:false,
    dots:true,
    adaptiveHight:true,
    speed:800,
    easing:'ease',
    initialSlide:1,
    autoplay:true,
    autoplaySpeed:3000,
    draggable:true,
    swipe:false,
    waitForAnimate:false,
  });
});