import { markUnavailable } from './add_button.js';

function goFullScreen() {

  if (document.body.requestFullScreen) {
    document.body.requestFullScreen();
  } else if (document.body.webkitRequestFullScreen) {
    document.body.webkitRequestFullScreen();
  } else if (document.body.mozRequestFullScreen) {
    document.body.mozRequestFullScreen();
  }

}

export function getFullScreen() {

  var element = document.getElementById('full-screen');

  if (window.fullScreen != undefined) {
    var full_screen = window.fullScreen;
  } else if (document.webkitIsFullScreen != undefined) {
    var full_screen = document.webkitIsFullScreen;
  }

  if (full_screen != undefined) {

    var string = '';

    if (full_screen) {
      element.innerHTML = 'Full Screen';

    } else {
      element.innerHTML = 'Not Full Screen ';

      if (document.body.requestFullScreen || document.body.webkitRequestFullScreen || document.body.mozRequestFullScreen) {
        var button = document.createElement('button');
        button.innerHTML = 'Go Full Screen';
        button.addEventListener('click', goFullScreen, false);
        element.appendChild(button);
      }


    }
  } else {
    markUnavailable(element);
  }

}


