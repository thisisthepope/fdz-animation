# Demo of exporting Adobe AfterEffects animation into SVG.

## Steps

1. Export json files from Adobe AfterEffects

2. Install the lottie HTML player. This can be done by either serving a script up from here: https://cdnjs.com/libraries/bodymovin OR getting it directly from Adobe AE (click Get Player to download the file)

3. Add the following JS snippet for each animation, replacing element id and path:

```
const buttonHover = bodymovin.loadAnimation({
  container: document.getElementById('button-hover'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'button-hover.json',
});
```

## Demo

![animation demo](ae-anim-demo.gif)
