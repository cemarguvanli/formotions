$(document).ready(function() {
  $('.carousel').carousel({
    interval: 5000 //changes the speed
  });
  var menu = $('#home nav');
  var origOffsetY = menu.offset().top;

  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('#home nav').addClass('sticky');
    } else {
      $('#home nav').removeClass('sticky');
    }


  }

  document.onscroll = scroll;

});
