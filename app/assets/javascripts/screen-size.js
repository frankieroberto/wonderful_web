

function getScreenSize() {

  var element = document.getElementById('screen-size');

  var width = window.screen.width;
  var height = window.screen.height;

  if (width != undefined && height != undefined) {
    element.innerHTML = width + ' x ' + height;
  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", getScreenSize, false);
