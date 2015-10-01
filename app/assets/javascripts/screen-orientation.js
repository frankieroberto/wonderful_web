
function getScreenOrientation() {

  var element = document.getElementById('screen-orientation');

  if (window.screen.orientation != undefined && window.screen.orientation.type != undefined &&
    window.screen.orientation.angle != undefined) {

    element.innerHTML = window.screen.orientation.type + ' (' + window.screen.orientation.angle + '°)';
  } else {
    markUnavailable(element);
  }


}


document.addEventListener("DOMContentLoaded", getScreenOrientation, false);
window.addEventListener("orientationchange", getScreenOrientation, false);
