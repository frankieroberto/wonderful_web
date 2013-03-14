var input = {};


function copyToClipboard() {

	

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

	var button = document.createElement('button');
	button.innerHTML = 'Copy';

	var status = document.createElement('span');
	status.setAttribute('id', 'clipboard-status');

	element.appendChild(input);
	element.appendChild(button);
	element.appendChild(status);

	button.addEventListener('click', copyToClipboard, false);
	input.addEventListener('copy', showCopied, false);

}

function checkClipboard() {
  var element = document.getElementById('clipboard');
  
  if (window.FictionalClipboardInterface != undefined) {
		setupClipboardInput();
	} else {
  	markUnavailable(element);
	}
}

 document.addEventListener("DOMContentLoaded", checkClipboard, false);
//document.addEventListener("copy", showClipboard, false);
