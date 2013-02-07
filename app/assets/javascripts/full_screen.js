function getFullScreen() {

  var element = document.getElementById('full-screen');

  if (window.fullScreen != undefined) {
    var full_screen = window.fullScreen;
  } else if (document.webkitIsFullScreen != undefined) {
    var full_screen = document.webkitIsFullScreen;
  }

  if (full_screen != undefined) {

    var string = '';

    if (full_screen) {
      string = 'Full Screen';
    } else {
      string = 'Not Full Screen'
    }
    element.innerHTML = string;
  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", getFullScreen, false);
window.addEventListener("resize", getFullScreen, false);
document.addEventListener("webkitfullscreenchange", getFullScreen, false);

