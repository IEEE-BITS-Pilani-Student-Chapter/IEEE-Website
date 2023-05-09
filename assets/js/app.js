particlesJS.load('sigs', './assets/js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

var typed = new Typed('#test', {
  strings: ['IEEE BITS Pilani Student Chapter', 'innovate.<br> achieve.<br> lead.', 'IEEE BITS Pilani Student Chapter'],
  typeSpeed: 50,
  showCursor: false,
});

var typed = new Typed('#test1', {
  strings: ['welcome to'],
  typeSpeed: 50,
  showCursor: false,
});