import { markUnavailable, markBlank } from './add_button.js';

export function getReferrer() {

  var element = document.getElementById('referrer');

  var referrer = document.referrer

  if (referrer != undefined) {

    if (referrer === '') {
      markBlank(element)
    } else {
      element.innerHTML = referrer;

    }
  } else {
    markUnavailable(element);
  }

}
