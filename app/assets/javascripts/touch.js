
touches = [];


function touchMove(event) {
  touches = event.touches;
  getTouch();
}

function touchStart(event) {

  touches = event.touches;
  getTouch();

}

function touchEnd(event) {
  touches = event.touches;

  getTouch();
}


function getTouch() {
  var element = document.getElementById('touch');

  if (touches.length === 0) {
    element.setAttribute('class', 'blank');
    element.innerHTML = '(no touch)';
  } else {

    var string = '';

    for (var i = 0; i < touches.length; i++) {

     string += 'TOUCH ' + touches[i].clientX + ' x ' + touches[i].clientY + ' ';
    }

    element.setAttribute('class', '');
    element.innerHTML = string;
  }

}


document.addEventListener("DOMContentLoaded", getTouch, false);
document.addEventListener("touchstart", touchStart, false);
document.addEventListener("touchend", touchEnd, false);
document.addEventListener("touchmove", touchMove, false);
