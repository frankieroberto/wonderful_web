
touch_data = '';

function touchMove(event) {
}

function touchStart(event) {
  touch_data = 'TOUCHING';
  getTouch();
}

function touchEnd(event) {
  touch_data = '';
  getTouch();
}


function getTouch() {
  var element = document.getElementById('touch');

  if (touch_data === '') {
    element.setAttribute('class', 'blank');
    element.innerHTML = '(no touch)';
  } else {
    element.setAttribute('class', '');
    element.innerHTML = touch_data;
  }

}


document.addEventListener("DOMContentLoaded", getTouch, false);
window.ontouchmove = touchMove;