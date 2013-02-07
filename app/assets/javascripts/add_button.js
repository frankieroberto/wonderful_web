function addButton(location, text, callback) {


  location.innerHTML = '';

  var button = document.createElement('button');
  button.innerHTML = text;
  button.onclick = callback;

  location.appendChild(button);

}

function markUnavailable(element) {
  if (element && element.innerHTML && element.setAttribute) {
    element.innerHTML = 'Unavailable';
    element.setAttribute('class', 'unavailable');
  }
}

function markBlank(element) {
  element.innerHTML = '(blank)';
  element.setAttribute('class', 'blank');
}

function markNoKeysPressed(element) {
  element.innerHTML = '(no keys pressed)';
  element.setAttribute('class', 'blank');
}