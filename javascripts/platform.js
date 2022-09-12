export function getPlatform() {

  var element = document.getElementById('platform');

  if (navigator.platform) {
    element.innerHTML = navigator.platform;
  } else {
    markUnavailable(element);
  }

}
