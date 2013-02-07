

function detectNetworkStatusAvailability() {

  var element = document.getElementById('network-status');

  if (navigator.onLine != undefined) {
    getNetworkStatus();
  } else {
    markUnavailable(element);
  }

}

function getNetworkStatus() {

  var element = document.getElementById('network-status');

  if (navigator.onLine) {
    element.innerHTML = 'Online';
  } else {
    element.innerHTML = 'Offline';
  }
}
