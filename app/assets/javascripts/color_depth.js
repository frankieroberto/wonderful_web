

function getColorDepth() {

  var element = document.getElementById('color-depth');

  var color_depth = window.screen.colorDepth;

  if (color_depth != undefined) {
    element.innerHTML = color_depth + ' bits';
  } else {
    markUnavailable(element);
  }

}
