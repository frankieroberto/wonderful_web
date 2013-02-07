
var languages = {
  'en-gb' : 'British English',
  'en' : 'English',
  'en-us' : 'American English',
  'de' : 'German'
};


function getLanguage() {

  var element = document.getElementById('language');

  var language_code = navigator.language;

  if (language_code != undefined) {

    var string = '';

    var language_name = languages[language_code.toLowerCase()];

    if (language_name) {
      string = language_name + ' (' + language_code + ')';
    } else {
      string = language_code;
    }

    element.innerHTML = string;

  } else {
    markUnavailable(element);
  }

}
document.addEventListener("DOMContentLoaded", getLanguage, false);
