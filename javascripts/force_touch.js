export function forceChanged(event) {

  var element = document.getElementById('force-touch');

  var forceLevel = event["webkitForce"];

  element.textContent = "Force level " + forceLevel;
}
