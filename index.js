let iconSkipForward = document.querySelector('.bodymovinanim');

let animationSkipForward = bodymovin.loadAnimation({
  container: iconSkipForward,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets3.lottiefiles.com/packages/lf20_eXssG2.json',
});
iconSkipForward.addEventListener('click', function () {
  animationSkipForward.playSegments([30, 62], true);
});

iconSkipForward.addEventListener('mouseenter', function () {
  animationSkipForward.playSegments([0, 31], true);
});
