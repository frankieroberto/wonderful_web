
function addSessionStorageInput(event) {

  var element = event.target
  element.removeEventListener('click', addSessionStorageInput);

  element.innerHTML = '';

  var previous_value = window.sessionStorage.getItem('test');

  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value = previous_value;
  input.addEventListener('blur', saveSessionStorage, false);
  input.addEventListener("keypress", blurIfEntered, false);

  element.appendChild(input);
  input.focus();


}

function saveSessionStorage(event) {

  var new_value = event.target.value

  if (new_value === '') {
    window.sessionStorage.clear('test');
  } else {
    window.sessionStorage.setItem('test', new_value);
  }
  getSessionStorage();
}

function getSessionStorage() {
  var element = document.getElementById('session-storage');


  var session_storage = window.sessionStorage;

  if (session_storage != undefined) {

    var current_value = window.sessionStorage.getItem('test');

    if (current_value && current_value != '') {
      element.innerHTML = current_value;
      element.removeAttribute('class');

    } else {
      element.innerHTML = '(empty)';
      element.setAttribute('class', 'empty');
    }

    element.addEventListener('click', addSessionStorageInput, false);

  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", getSessionStorage, false);
