
function addCookieInput(event) {

  var element = event.target
  element.removeEventListener('click', addCookieInput);

  element.innerHTML = '';

  var previous_value = unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape('test').replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));


  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value = previous_value;
  input.addEventListener('blur', saveCookie, false);
  input.addEventListener("keypress", blurIfEntered, false);

  element.appendChild(input);
  input.focus();


}

function saveCookie(event) {
  var new_value = event.target.value

  if (new_value === '') {
    document.cookie = 'test=' + escape(new_value);
  } else {
    document.cookie = 'test=' + escape(new_value);
  }
  getCookies();
}

function getCookies() {

  var element = document.getElementById('cookies');

  var cookies_enabled = navigator.cookieEnabled;

  if (cookies_enabled != undefined) {

    var message = '';

    if (cookies_enabled) {

      var cookie_text = unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape('test').replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));

      if (cookie_text && cookie_text != '') {

        element.innerHTML = cookie_text;
        element.removeAttribute('class');
      } else {
        element.innerHTML = '(empty)'
        element.setAttribute('class','empty');
      }
      element.addEventListener('click', addCookieInput, false);


    } else {
      element.innerHTML = 'Disabled';

    }


  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", getCookies, false);
