
function forceChanged(event) {

  var element = document.getElementById('force-touch');

  var forceLevel = event["webkitForce"];

  element.textContent = "Force level " + forceLevel;

}


  // Attach event listeners in preparation for responding to force clicks
document.addEventListener("webkitmouseforcechanged", forceChanged, false);
