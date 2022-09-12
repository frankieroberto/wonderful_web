import { markUnavailable } from './add_button.js';

export function getBatteryStatus() {

  var element = document.getElementById('battery-status');

  if (navigator.battery != undefined) {

    var battery = navigator.battery;
    var battery_charging = battery.charging;
    var battery_level = parseInt(battery.level * 100) + "% full";

    var element = document.getElementById('battery-status');

    if (battery_charging) {

      element.innerHTML = 'Charging: ' + battery_level;
    } else {
      element.innerHTML = 'Not charging: ' + battery_level;

    }


    navigator.battery.addEventListener('chargingchange', getBatteryStatus, false);
    navigator.battery.addEventListener('levelchange', getBatteryStatus, false);

  } else {
    markUnavailable(element);
  }

}
