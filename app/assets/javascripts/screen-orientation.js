
function getScreenOrientation() {

  var element = document.getElementById('orientation');

  if (screen.orientation) {
    var screen_orientation = screen.orientation;
  } else if (screen.mozOrientation) {
    var screen_orientation = screen.mozOrientation;
  }

  if (screen_orientation != undefined) {
    console.log('test');

    element.innerHTML = screen_orientation;
  } else {
    markUnavailable(element);
  }


}


document.addEventListener("DOMContentLoaded", getScreenOrientation, false);
