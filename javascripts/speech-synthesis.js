import { markUnavailable } from './add_button.js';

function sayUtterance(text) {

  var utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.lang = 'en-US';

  window.speechSynthesis.speak(utterance)

}

export function checkSpeechSynthesis() {

  var element = document.getElementById('speech-synthesis');

  if ('speechSynthesis' in window) {

    var input = document.createElement('input')
    input.setAttribute('type', 'text')

    var button = document.createElement('button')
    button.textContent = 'Test'

    button.addEventListener('click', function() {

      sayUtterance(input.value)

    })

    element.appendChild(input)
    element.appendChild(button)

  } else {
    markUnavailable(element);
  }

}
