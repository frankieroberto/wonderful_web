export function getUserAgent() {

  var element = document.getElementById('user-agent');

  if (navigator.userAgent) {
    element.innerHTML = navigator.userAgent;
  } else {
    markUnavailable(element);
  }

}
