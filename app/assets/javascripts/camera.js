
function getCamera() {

  navigator.webkitGetUserMedia({video: true}, gotUserMedia, errorUserMedia);

}

function gotUserMedia(stream) {

  setTimeout(function() {
    stream.stop();
  }, 1000)

}

function errorUserMedia() {
  alert('fail');
}

function detectCameraAvailability() {

  var camera_data = document.getElementById('camera-data');

  if (navigator.getUserMedia || navigator.webkitGetUserMedia) {
    addButton(camera_data, 'Get Camera', getCamera);
  } else {
    camera_data.innerHTML = 'Unavailable';
    camera_data.setAttribute('class','unavailable')
  }

}