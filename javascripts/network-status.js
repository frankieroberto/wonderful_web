import { markUnavailable } from './add_button.js';

export function getNetworkStatus() {

  var element = document.getElementById('network-status');

  if (navigator.onLine != undefined) {
    if (navigator.onLine) {
      element.innerHTML = 'Online';
    } else {
      element.innerHTML = 'Offline';
    }
  } else {
    markUnavailable(element);
  }
}
