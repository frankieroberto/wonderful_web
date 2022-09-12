export function updateScrollPosition() {

  var element = document.getElementById('scroll-position');

  var scroll_x = window.scrollX;
  var scroll_y = window.scrollY;

  if (scroll_x != undefined && scroll_y != undefined) {
    element.innerHTML = 'X: ' + scroll_x + " Y: " + scroll_y;
  } else {
    markUnavailable(element);
  }

}
