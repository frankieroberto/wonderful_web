

function detectApplicationName() {

  var element = document.getElementById('application-name');

  if (navigator.appName) {
    element.innerHTML = navigator.appName;

  } else {
    markUnavilable(element);
  }

}

document.addEventListener("DOMContentLoaded", detectApplicationName, false);
