'use strict';
$(document).ready(function() {
  $('.carousel').carousel({
    interval: false //changes the speed
  });

  // Sticky
  var menu = $('#home nav');
  var menuOrigOffsetY = menu.offset().top;

  function scroll() {
    if ($(window).scrollTop() >= menuOrigOffsetY) {
      $('#home nav').addClass('sticky');
    } else {
      $('#home nav').removeClass('sticky');
    }
  }
  document.onscroll = scroll;

  // Isotope/Masonry
  var $grid = $('.grid').imagesLoaded(function() {
    // init Isotope after all images have loaded
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: 5
      }
    });
    $('.works-filter').on('click', 'a', function(e) {
      e.preventDefault();

      $('.works-filter a').removeClass('active');
      $(this).addClass('active');

      var filterValue = $(this).attr('data-filter');

      $grid.isotope({
        filter: filterValue
      });
    });
  });
});

// Nav Active
var navActiveActions = function() {
  var sections = $('section'),
    nav = $('nav'),
    navHeight = nav.outerHeight();

  $(window).on('scroll', function() {
    var curPos = $(this).scrollTop();
    sections.each(function() {
      var top = $(this).offset().top - navHeight,
        bottom = top + $(this).outerHeight();

      if (curPos >= top && curPos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function() {
    var $el = $(this),
      id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - navHeight
    }, 500);
    $('.navbar-collapse').removeClass('in');
    return false;
  });
};

navActiveActions();
