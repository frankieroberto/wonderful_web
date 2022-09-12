
let mouse_x = null;
let mouse_y = null;
let mouse_click = '';

export function mouseDown(event) {

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

export function mouseUp(event) {
  mouse_click = '';
  showPointer();
}

export function mouseMove(event) {
  mouse_x = event.screenX;
  mouse_y = event.screenY;
  showPointer();
}

function showPointer() {
  var element = document.getElementById('pointer');

  if (mouse_x && mouse_y) {
    element.innerHTML = 'X: ' + mouse_x + ' Y: ' + mouse_y + ' ' + mouse_click;
    element.setAttribute('class', '');
  } else {
    element.innerHTML = '(no pointer)';
    element.setAttribute('class', 'blank');
  }
}
