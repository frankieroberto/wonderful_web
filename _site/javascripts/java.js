export function getJavaEnabled() {

  var element = document.getElementById('java');


  if (navigator.javaEnabled != undefined) {

    var message = '';

    if (navigator.javaEnabled()) {
      message = 'Enabled';
    } else {
      message = 'Disabled';
    }
    element.innerHTML = message;
  } else {
    markUnavailable(element);
  }

}
