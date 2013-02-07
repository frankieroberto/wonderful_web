

function getLocalStorage() {

  var element = document.getElementById('local-storage');


  var local_storage = window.localStorage;

  if (local_storage != undefined) {
    element.innerHTML = 'Available';
  } else {
    markUnavailable(element);
  }

}
