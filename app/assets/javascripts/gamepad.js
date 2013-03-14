

function checkGamepads() {

  var element = document.getElementById('gamepads');

  if (navigator.getGamepads != undefined) {
		element.textContent = 'Supported';
  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", checkGamepads, false);
