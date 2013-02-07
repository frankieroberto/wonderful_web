function getFullScreen() {

  var element = document.getElementById('full-screen');

  var full_screen = window.fullScreen;

  if (full_screen != undefined) {
    element.innerHTML = full_screen;
  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", getFullScreen, false);
