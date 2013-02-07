


  function detectGeolocationAvailability() {
    var geolocation_availability = document.getElementById('geolocation-data');

    if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      addGetLocationButton();
    } else {
      geolocation_availability.innerHTML = 'Unavailable';
    }
  }

  function addGetLocationButton() {
    geolocation_action = document.getElementById('geolocation-data');

    geolocation_action.innerHTML = '';

    geolocation_button = document.createElement('button');
    geolocation_button.innerHTML = 'Get location';
    geolocation_button.onclick = getLocation;

    geolocation_action.appendChild(geolocation_button);
  }

  function getLocation() {
    geolocation_action = document.getElementById('geolocation-data');
    geolocation_action.innerHTML = 'Requesting location';

    navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError);
  }

  function geoLocationSuccess(geo_success) {

    var geolocation_status = document.getElementById('geolocation-data');
    geolocation_status.innerHTML = geo_success.coords.latitude + ', ' +  geo_success.coords.longitude;
    geolocation_status.setAttribute('class', 'success');

  }

  function geoLocationError(error) {

    addGetLocationButton();

    var geolocation_status = document.getElementById('geolocation-data');
    geolocation_status.setAttribute('class', 'error');

    var message = '';

    switch(error.code) {
      case error.PERMISSION_DENIED:
        message = 'Permisson denied'; break;
      case error.POSITION_UNAVAILABLE:
        message = 'Position unavailable'; break;
      case error.TIMEOUT:
        message = 'Timed out' + error.code; break;
    };

    geolocation_status.innerHTML = message;

  }


document.addEventListener("DOMContentLoaded", detectGeolocationAvailability, false);
