function getNetworkInformation() {

  var element = document.getElementById('network-information');

  if (navigator.connection != undefined && navigator.connection.type != undefined) {
    element.innerText = navigator.connection.type;
  } else {
    markUnavailable(element);
  }
}

document.addEventListener("DOMContentLoaded", getNetworkInformation, false);

if (navigator.connection != undefined && navigator.connection.ontypechange != undefined) {
  navigator.connection.addEventListener('typechange', getNetworkInformation);
}
