const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();


// SCENE
const scene = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // 33.33 is calculated from frame rates per second ex, 1000/30 frames = 33.3, if it was 24 frames/sec then 1000/24
  video.currentTime = delay;
}, 33.3);