

function addFilePicker() {

  var element = document.getElementById('file-reader');

  var file_picker = document.createElement('input');
  file_picker.setAttribute('type', 'file');

  file_picker.onchange = function(event) {
    event.preventDefault();

    var element = document.getElementById('file-reader');

    var file = event.target.files[0];
    if (file && file.name && file.type) {
      element.innerHTML = file.name + "<br> " + file.type;
    }

  }

  element.appendChild(file_picker);

}


function detectFileReaderAvailability() {

  var file_picker = document.getElementById('file-picker');

  var element = document.getElementById('file-reader');

  if (window.FileReader) {
    addFilePicker();
  } else {
    markUnavailable(element);
  }


}
