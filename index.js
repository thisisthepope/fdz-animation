let iconSkipForwardUp = document.querySelector('.button-up');
let iconSkipForwardDown = document.querySelector('.button-down');

// Skip up animation
let animationSkipForwardUp = bodymovin.loadAnimation({
  container: iconSkipForwardUp,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'up.json',
});

iconSkipForwardUp.addEventListener('click', function () {
  animationSkipForwardUp.playSegments([30, 62], true);
});

iconSkipForwardUp.addEventListener('mouseenter', function () {
  animationSkipForwardUp.playSegments([0, 31], true);
});

// Skip down animation
let animationSkipForwardDown = bodymovin.loadAnimation({
  container: iconSkipForwardDown,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'down.json',
});

iconSkipForwardDown.addEventListener('click', function () {
  animationSkipForwardDown.playSegments([30, 62], true);
});

iconSkipForwardDown.addEventListener('mouseenter', function () {
  animationSkipForwardDown.playSegments([0, 31], true);
});
