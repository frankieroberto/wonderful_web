//
//= require_tree .

window.onload = function() {

  detectGeolocationAvailability();
  detectScreenOrientationAvailability();
  detectBatteryStatusAvailability();
  detectNetworkStatusAvailability();
  detectApplicationName();
  detectApplicationVersion();
  detectCameraAvailability();
  detectFileReaderAvailability();
  getPlatform();
  getUserAgent();
  getLanguage();
  getReferrer();
  getDoNotTrack();
  getPlugins();
  getCookies();
  getWindowSize();
  getScreenSize();
  getColorDepth();
  getFullScreen();
  getLocalStorage();
  getSessionStorage();
  getJavaEnabled();
  getJavascriptEnabled();
  getVibration();
  getKeyboard();
  getPointer();
  getTouch();

}