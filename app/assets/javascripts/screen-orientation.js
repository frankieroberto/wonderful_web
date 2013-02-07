
function getScreenOrientation() {

  var element = document.getElementById('orientation');

  if (screen.orientation) {
    var screen_orientation = screen.orientation;
  } else if (screen.mozOrientation) {
    var screen_orientation = screen.mozOrientation;
  }

  element.innerHTML = screen_orientation;

}

function detectScreenOrientationAvailability() {

  var element = document.getElementById('orientation');

  if (screen && (screen.orientation || screen.mozOrientation)) {

    getScreenOrientation();

  } else {

    markUnavailable(orientation);
  }

}