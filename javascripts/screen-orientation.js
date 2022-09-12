import { markUnavailable } from './add_button.js';

export function getScreenOrientation() {

  var element = document.getElementById('screen-orientation');

  if (window.screen.orientation != undefined && window.screen.orientation.type != undefined &&
    window.screen.orientation.angle != undefined) {

    element.innerHTML = window.screen.orientation.type + ' (' + window.screen.orientation.angle + '°)';
  } else {
    markUnavailable(element);
  }


}
