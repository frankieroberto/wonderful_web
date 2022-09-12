import { markUnavailable } from './add_button.js';

export function getDoNotTrack() {

  var element = document.getElementById('do-not-track');

  var value = navigator.doNotTrack
  if (value != undefined) {

    if (value === 'yes' || value === '1') {
      element.innerHTML = 'Do Not Track';
    } else if (value == 'no' || value === '0') {
      element.innerHTML = 'Tracking OK';
    } else {
      element.innerHTML = '(not specified)';
    }

  } else {
    markUnavailable(element);
  }

}
