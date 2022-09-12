import { markUnavailable } from './add_button.js';

function requestNotificationPermission() {

	if (Notification.requestPermission != undefined) {
		Notification.requestPermission(function() {
      getNotifications();
    });
	}
}

function notificationShown() {
  var element = document.getElementById('web-notifications');
  element.innerHTML = 'Notification shown';
}

function notificationClosed() {
  getNotifications();
}

function notificationClicked() {
  getNotifications();
}

function notificationError() {
  var element = document.getElementById('web-notifications');
  element.innerHTML = 'Notification error';
}

function sendNotification() {

  var notification = new Notification('Notification',
    {
      body: 'This is a notification',
      tag: 'test',
      onshow: notificationShown,
      onclose: notificationClosed,
      onclick: notificationClicked,
      onerror: notificationError
    }
  );

}

function showPermissionDenied() {
  var element = document.getElementById('web-notifications');
  element.innerHTML = 'Permission Denied';
}

function addRequestPermissionButton() {
  var element = document.getElementById('web-notifications');
  var button = document.createElement('button');
  button.innerHTML = 'Enable';
  button.addEventListener('click', requestNotificationPermission, false);
  element.innerHTML = '';
  element.appendChild(button);
}

function addNotifyButton() {
  var element = document.getElementById('web-notifications');
  var button = document.createElement('button');
  button.innerHTML = 'Notify';
  button.addEventListener('click', sendNotification, false);

  element.innerHTML = '';
  element.appendChild(button);
}

function getNotifications() {
  checkNotifications();
}

export function checkNotifications() {

  var element = document.getElementById('web-notifications');

  if (window.Notification != undefined && window.Notification.permission != undefined) {

		var permission_level = window.Notification.permission

		if (permission_level == 'granted') {
			addNotifyButton()
		} else if (permission_level == 'denied') {
			showPermissionDenied();
		} else {
			addRequestPermissionButton();
		}

  } else {
    markUnavailable(element);
  }


}

