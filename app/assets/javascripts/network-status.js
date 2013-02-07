function getNetworkStatus() {

  var element = document.getElementById('network-status');

  if (navigator.onLine != undefined) {
    if (navigator.onLine) {
      element.innerHTML = 'Online';
    } else {
      element.innerHTML = 'Offline';
    }
  } else {
    markUnavailable(element);
  }
}

document.addEventListener("DOMContentLoaded", getNetworkStatus, false);
window.addEventListener("online", getNetworkStatus, false);
window.addEventListener("offline", getNetworkStatus, false);
