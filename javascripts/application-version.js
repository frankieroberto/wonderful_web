export function detectApplicationVersion() {

  var element = document.getElementById('application-version');

  if (navigator.appVersion) {
    element.innerHTML = navigator.appVersion;

  } else {
    markUnavilable(element);
  }

}
