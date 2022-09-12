import { markUnavailable } from './add_button.js';

function ambientLightChange(event) {

  var element = document.getElementById('ambient-light');

  if (event.value) {
    element.textContent = event.value + ' lux';
  }
}

export function setupAmbientLight() {

  var element = document.getElementById('ambient-light');

  if (typeof DeviceLightEvent != 'undefined') {

    window.addEventListener('devicelight', ambientLightChange);

  } else {
    markUnavailable(element)
  }

}
