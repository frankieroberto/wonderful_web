export function addButton(location, text, callback) {


  location.innerHTML = '';

  var button = document.createElement('button');
  button.innerHTML = text;
  button.onclick = callback;

  location.appendChild(button);

}

export function markUnavailable(element) {
  if (element && element.innerHTML !== undefined && element.setAttribute !== undefined) {
    element.innerHTML = 'Unavailable';
    element.setAttribute('class', 'unavailable');
  }
}

export function markBlank(element) {
  element.innerHTML = '(blank)';
  element.setAttribute('class', 'blank');
}


export function blurIfEntered(event) {
  if (event.charCode === 13) {
    event.target.blur();
  }
}
