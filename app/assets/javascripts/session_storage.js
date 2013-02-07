

function getSessionStorage() {

  var element = document.getElementById('session-storage');

  var session_storage = window.sessionStorage;

  if (session_storage != undefined) {
    element.innerHTML = 'Available';
  } else {
    markUnavailable(element);
  }

}
