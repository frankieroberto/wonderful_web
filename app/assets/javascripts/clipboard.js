var input = {};


function copyToClipboard() {

  var input_element = document.getElementById('clipboard-input')
  input_element.select()

  var status_element = document.getElementById('clipboard-status')


  try {
    var successful = document.execCommand('copy');

    if (successful) {
      status_element.textContent = 'Copied'
    } else {
      status_element.textContent = 'Failed to copy'
    }

  } catch(err) {
    status_element.textContent = 'Error'
  }

}

function showCopied(event) {


	var clipboard_data = event.clipboardData

	clipboard_data.setData('text/plain', 'test');


		console.log(clipboard_data);

	var status = document.getElementById('clipboard-status');

	status.innerHTML = 'Copied';

}


function setupClipboardInput() {

	var element = document.getElementById('clipboard');

	input = document.createElement('input');
	input.setAttribute('type', 'text');
  input.setAttribute('id', 'clipboard-input')

	var copy_button = document.createElement('button');
	copy_button.innerHTML = 'Copy';

  var paste_button = document.createElement('button');
  paste_button.innerHTML = 'Paste';


	var status = document.createElement('span');
	status.setAttribute('id', 'clipboard-status');

	element.appendChild(input);
	element.appendChild(copy_button);
  element.appendChild(paste_button);
	element.appendChild(status);

	copy_button.addEventListener('click', copyToClipboard, false);
  paste_button.addEventListener('click', pasteFromClipboard, false);
	// input.addEventListener('copy', showCopied, false);

}

function checkClipboard() {
  var element = document.getElementById('clipboard');

  if (document.queryCommandSupported('copy')) {
		setupClipboardInput();
	} else {
  	markUnavailable(element);
	}
}


 document.addEventListener("DOMContentLoaded", checkClipboard, false);
//document.addEventListener("copy", showClipboard, false);
