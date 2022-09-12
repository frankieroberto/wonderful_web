
let touches = [];


export function touchMove(event) {
  touches = event.touches;
  getTouch();
}

export function touchStart(event) {

  touches = event.touches;
  getTouch();

}

export function touchEnd(event) {
  touches = event.touches;

  getTouch();
}


export function getTouch() {
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
