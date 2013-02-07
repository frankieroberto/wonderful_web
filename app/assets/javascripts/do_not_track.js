

function getDoNotTrack() {

  var element = document.getElementById('do-not-track');

  var value = navigator.doNotTrack
  if (value != undefined) {
    element.innerHTML = value;
  } else {
    markUnavailable(element);
  }

}
