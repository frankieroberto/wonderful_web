
mouse_x = null;
mouse_y = null;
mouse_click = '';


function mouseDown(event) {
  mouse_click = 'CLICK';
  showPointer();
}

function mouseUp(event) {
  mouse_click = '';
  showPointer();
}

function mouseMove(event) {
  mouse_x = event.clientX;
  mouse_y = event.clientY;
  showPointer();
}

function showPointer() {
  var element = document.getElementById('pointer');

  element.innerHTML = 'X: ' + mouse_x + ' Y: ' + mouse_y + ' ' + mouse_click;
}

function getPointer() {

  showPointer();
  window.onmousedown = mouseDown;
  window.onmouseup = mouseUp;
  window.onmousemove = mouseMove;

}
