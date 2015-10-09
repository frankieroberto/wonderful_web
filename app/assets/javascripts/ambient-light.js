

function ambientLightChange(event) {

  var element = document.getElementById('ambient-light');

  if (event.value) {
    element.textContent = event.value + ' lux';
  }
}

function setupAmbientLight() {

  var element = document.getElementById('ambient-light');

  if (typeof DeviceLightEvent != 'undefined') {

    window.addEventListener('devicelight', ambientLightChange);

  } else {
    markUnavailable(element)
  }

}


document.addEventListener("DOMContentLoaded", setupAmbientLight, false);
