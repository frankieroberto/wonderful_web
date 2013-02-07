

function getVibration() {

  var element = document.getElementById('vibration');

  var vibration = navigator.vibrate;

  if (vibration != undefined && navigator.vibrate(200)) {
    element.innerHTML = 'Available';
  } else {
    markUnavailable(element);
  }

}
