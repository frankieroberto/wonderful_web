import { markUnavailable } from './add_button.js';

export function checkGamepads() {

  var element = document.getElementById('gamepads');

  if (navigator.getGamepads != undefined) {
		element.textContent = 'Supported';
  } else {
    markUnavailable(element);
  }

}
