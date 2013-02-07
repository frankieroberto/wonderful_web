
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

    if (languages[language_code]) {
      string = languages[language_code] + ' (' + language_code + ')';
    } else {
      string = language_code;
    }

    element.innerHTML = string;

  } else {
    markUnavailable(element);
  }

}
