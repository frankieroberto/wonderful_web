
function vibrate() {

  var button = this;

  button.innerText = 'Vibrating...'

  window.setTimeout(function() {
    button.innerText = 'Vibrate';
  }, 1000)

  navigator.vibrate(1000)
}

function getVibration() {

  var element = document.getElementById('vibration');

  var vibration = navigator.vibrate;

  if (vibration != undefined) {

    var vibrate_button = document.createElement('button')
    vibrate_button.innerText = 'Vibrate'

    vibrate_button.addEventListener('click', vibrate);

    element.innerHTML = '';
    element.appendChild(vibrate_button)

  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", getVibration, false);
