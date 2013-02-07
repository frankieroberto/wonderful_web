

function getBatteryStatus() {

  var element = document.getElementById('battery-status');

  if (navigator.battery != undefined) {

    var battery = navigator.battery;
    var battery_charging = battery.charging;
    var battery_level = battery.level * 100 + "% full";

    var element = document.getElementById('battery-status');

    if (battery_charging) {

      element.innerHTML = 'Charging: ' + battery_level;
    } else {
      element.innerHTML = 'Not charging: ' + battery_level;

    }
  } else {
    markUnavailable(element);
  }

}


document.addEventListener("DOMContentLoaded", getBatteryStatus, false);
