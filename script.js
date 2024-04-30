document.addEventListener("DOMContentLoaded", function() {
  const loadText = document.querySelector('.loading-text');
  const image = document.querySelector('.blurry-image');

  let load = 0;
  let int;

  function blurring() {
      load++;

      if (load > 99) {
          clearInterval(int);

          setTimeout(() => {
              load = 0;
              int = setInterval(blurring, 30);
          }, 2000);
      }

      loadText.innerText = load + '%';
      image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }

  int = setInterval(blurring, 30);
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
