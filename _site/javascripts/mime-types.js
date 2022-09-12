import { markUnavailable } from './add_button.js';

export function getMimeTypes() {

  var element = document.getElementById('mime-types');

  var mime_types = navigator.mimeTypes;

  if (mime_types != undefined) {

    var string = '';

    if (mime_types.length === 0) {
      element.innerHTML = '(none)';
      element.setAttribute('class', 'blank');
    } else {

        var list = document.createElement('ul');


        for (var i = 0; i < mime_types.length; i++) {

          var li = document.createElement('li');

          var description = mime_types[i].description;

          if (description) {
            li.innerHTML = description + ' (' + mime_types[i].type + ')';
          } else {
            li.innerHTML = mime_types[i].type;
          }

          list.appendChild(li);
        }

        element.appendChild(list);
    }

  } else {
    markUnavailable(element);
  }

}
