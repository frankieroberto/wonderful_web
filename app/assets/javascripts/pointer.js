
mouse_x = null;
mouse_y = null;
mouse_click = '';


function mouseDown(event) {

  console.log(event);

  if (event.ctrlKey) {
    mouse_click += 'CONTROL '
  }

  if (event.altKey) {
    mouse_click += 'ALT '
  }

  if (event.shiftKey) {
    mouse_click += 'SHIFT '
  }

  if (event.metaKey) {
    mouse_click += 'META '
  }

  if (event.button != undefined) {
    if (event.button == 0) {
      mouse_click += 'LEFT ';
    } else if (event.button === 1) {
      mouse_click += 'RIGHT ';
    } else {
      mouse_click += '(UNKNOWN BUTTON) ';
    }
  }
  mouse_click += 'CLICK';
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

document.addEventListener("DOMContentLoaded", showPointer, false);
window.onmousedown = mouseDown;
window.onmouseup = mouseUp;
window.onmousemove = mouseMove;
