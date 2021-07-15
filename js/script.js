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
  mirror: true
});

// Typewriter Animation on the home section (Typed.js)
var options = {
  strings: ['Front ^10 End ^10 Developer', 'using ^10 MERN ^10 stack', 'sushi ^10 lover'],
  startDelay: 1500,
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 2000,
  smartBackspace: false,
  loop: true
};
var typed = new Typed('#typed', options);

// Typewriter Animation on the contact section (Typed.js)
var options2 = {
  strings: ['Feel free to reach out to me!'],
  typeSpeed: 50,
  loop: false,
  cursorChar: "",
};

// Execute itype with scroll event
$(function() {
  var animationFlag = false;
  $(window).on("scroll",function(){
    var scroll = $(window).scrollTop();
    var example = $("#typed2").offset().top;
    var screen_height = window.innerHeight;
    var example_height = $("#typed2").innerHeight();
    if(scroll > example - (screen_height / 2) + (example_height / 2)) {
      if(!animationFlag) {
        animationFlag = true;
        var typed2 = new Typed('#typed2', options2);
      } 
    }
  });
});

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
  }, 2000);
});

// Submit form with AJAX
const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm);
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
      M.toast({
        html: 'Submitted successfully!',
        displayLength: 5000
      });
    }
  )
  .catch((error) => alert(error));
};
document.querySelector("form").addEventListener("submit", handleSubmit);