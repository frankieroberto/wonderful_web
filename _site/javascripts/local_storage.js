import { blurIfEntered, markUnavailable } from './add_button.js';

function addLocalStorageInput(event) {

  var element = event.target
  element.removeEventListener('click', addLocalStorageInput);

  element.innerHTML = '';

  var previous_value = window.localStorage.getItem('test');

  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value = previous_value;
  input.addEventListener('blur', saveLocalStorage, false);
  input.addEventListener("keypress", blurIfEntered, false);

  element.appendChild(input);
  input.focus();


}

function saveLocalStorage(event) {

  var new_value = event.target.value

  if (new_value === '') {
    window.localStorage.clear('test');
  } else {
    window.localStorage.setItem('test', new_value);
  }
  getLocalStorage();
}

export function getLocalStorage() {
  var element = document.getElementById('local-storage');


  var local_storage = window.localStorage;

  if (local_storage != undefined) {

    var current_value = window.localStorage.getItem('test');

    if (current_value && current_value != '') {
      element.innerHTML = current_value;
      element.removeAttribute('class');

    } else {
      element.innerHTML = '(empty)';
      element.setAttribute('class', 'empty');
    }

    element.addEventListener('click', addLocalStorageInput, false);

  } else {
    markUnavailable(element);
  }

}
