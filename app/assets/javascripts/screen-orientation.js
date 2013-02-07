
function getScreenOrientation() {

  var element = document.getElementById('orientation');

  if (window.orientation != undefined) {
    var screen_orientation = window.orientation;
  } else if (screen.orientation != undefined) {
    var screen_orientation = screen.orientation;
  } else if (screen.mozOrientation != undefined) {
    var screen_orientation = screen.mozOrientation;
  }

  if (screen_orientation != undefined) {
    element.innerHTML = screen_orientation;
  } else {
    markUnavailable(element);
  }


}


document.addEventListener("DOMContentLoaded", getScreenOrientation, false);
window.addEventListener("orientationchange", getScreenOrientation, false);
