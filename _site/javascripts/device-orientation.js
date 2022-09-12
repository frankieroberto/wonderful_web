import { markUnavailable } from './add_button.js';

export function handleDeviceOrientation(event) {

  var element = document.getElementById('device-orientation');

  if (event.alpha != undefined && event.beta  != undefined && event.gamma != undefined) {

    var alpha = Math.round(event.alpha);
    var beta = Math.round(event.beta);  // In degree in the range [-180,180]
    var gamma = Math.round(event.gamma); // In degree in the range [-90,90]

    element.textContent = 'Alpha: ' + alpha + ' Beta: ' + beta + ' Gamma: ' + gamma;

  } else {

    markDeviceOrientationUnavailable();
  }

}

export function setupDeviceOrientation() {
  markDeviceOrientationUnavailable
}


export function markDeviceOrientationUnavailable() {
  var element = document.getElementById('device-orientation');
  markUnavailable(element);
}
