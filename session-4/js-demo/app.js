function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

function generateColorComponent() {
  return getRandomInt(0, 256);
}

document.querySelector(".btn").addEventListener("click", function () {
  var r = generateColorComponent();
  var g = generateColorComponent();
  var b = generateColorComponent();
  document.querySelector("body").style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')';
});
