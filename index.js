const buttonHover = bodymovin.loadAnimation({
  container: document.getElementById('button-hover'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'button-hover.json',
});

const buttonStatic = bodymovin.loadAnimation({
  container: document.getElementById('button-static'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'button-static.json',
});

const buttonClick = bodymovin.loadAnimation({
  container: document.getElementById('button-click'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'button-click.json',
});
