export function getWindowSize() {

  var element = document.getElementById('window-size');

  var inner_width = window.innerWidth;
  var inner_height = window.innerHeight;

  if (inner_width != undefined && inner_height != undefined) {
    element.innerHTML = inner_width + ' x ' + inner_height;
  } else {
    markUnavailable(element);
  }

}

