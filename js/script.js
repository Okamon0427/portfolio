// Initialize Materialize
document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav, {});
  var scrollspy = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scrollspy, { scrollOffset: 0 });
});

// Scroll Animation (AOS)
AOS.init({
  offset: 100,
  delay: 0,
  duration: 1000,
  easing: 'ease-in-out-back',
  mirror: true,
});

// Typewriter Animation (Typed.js)
var options = {
  strings: ['Web ^10 Developer', 'using ^10 MERN ^10 stack', 'sushi ^10 lover'],
  startDelay: 1000,
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 2000,
  smartBackspace: false,
  loop: true
};
var typed = new Typed('#typed', options);

// Smooth Scroll
$(document).ready(function() {
  $("#scroll-button").on('click', function() {
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top + 1
    }, 800);
    return false;
  });
});

// Bounce techs icon in project section
$(function() {
  var elements = $(".language-image");
  setInterval(function() {
    for(var i = 0; i < elements.length; i++) {
      var random = Math.floor(Math.random() * 10);
      if (random < 2) {
        var element = elements[i];
        $(element).addClass('bounce').on('animationend', function() {
          $(this).removeClass('bounce');
          return false;
        });
      }
    }
  }, 3000);
});
