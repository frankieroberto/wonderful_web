

function getCookies() {

  var element = document.getElementById('cookies');

  var cookies_enabled = navigator.cookieEnabled;

  if (cookies_enabled != undefined) {

    var message = '';

    if (cookies_enabled) {
      message = 'Enabled';
    } else {
      message = 'Disabled';
    }

    element.innerHTML = message;

  } else {
    markUnavailable(element);
  }

}
