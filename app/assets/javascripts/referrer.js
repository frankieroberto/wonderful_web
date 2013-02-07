

function getReferrer() {

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

document.addEventListener("DOMContentLoaded", getReferrer, false);
