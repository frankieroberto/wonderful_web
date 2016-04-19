function handleAbsoluteDeviceOrientation(event) {


  var element = document.getElementById('absolute-device-orientation');

  if (event.alpha != undefined && event.beta  != undefined && event.gamma != undefined) {

    var alpha = Math.round(event.alpha);
    var beta = Math.round(event.beta);  // In degree in the range [-180,180]
    var gamma = Math.round(event.gamma); // In degree in the range [-90,90]

    element.textContent = 'Alpha: ' + alpha + ' Beta: ' + beta + ' Gamma: ' + gamma;

  } else {

    markAbsoluteDeviceOrientationUnavailable();
  }


}

function markAbsoluteDeviceOrientationUnavailable() {
  var element = document.getElementById('absolute-device-orientation');
  markUnavailable(element);
}


window.addEventListener("deviceorientationabsolute", handleAbsoluteDeviceOrientation);
