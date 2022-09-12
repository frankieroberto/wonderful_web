import { markUnavailable } from './add_button.js';

export function getNetworkInformation() {

  var element = document.getElementById('network-information');

  if (navigator.connection != undefined && navigator.connection.type != undefined) {
    element.innerText = navigator.connection.type;
  } else {
    markUnavailable(element);
  }
}
