// Initialize AOS
AOS.init({
  offset: 100,
  delay: 0,
  duration: 1000,
  easing: 'ease-in-out-back',
  mirror: true,
});

// Typed.js
var options = {
  strings: ['a Web Developer', 'using a MERN stack', 'a sushi lover'],
  startDelay: 1000,
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 2000,
  smartBackspace: false,
  loop: true
};
var typed = new Typed('#typed', options);