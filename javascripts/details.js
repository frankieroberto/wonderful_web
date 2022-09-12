
function toggleDetailsStatus(event) {

  console.log('toggling');
  var element = event.target;

  var parent_element = event.target.parentNode;

  if (parent_element.getAttribute('closed')) {
    parent_element.removeAttribute('closed');
    parent_element.setAttribute('open', 'open');

  } else {
    parent_element.setAttribute('closed', 'closed');
    parent_element.removeAttribute('open');
  }

}

function addDetailsBehaviourIfNotSupported() {

  var details = document.createElement('details');

  if (details.open === undefined) {

    var details_elements = document.getElementsByTagName('details');

    for (i=0;i< details_elements.length;i++) {

      details_elements[i].setAttribute('closed', 'closed');

      var summary_element = details_elements[i].getElementsByTagName('summary');

      if (summary_element.length > 0) {
        summary_element[0].addEventListener('click', toggleDetailsStatus);
      }

    }

  }

}

document.addEventListener("DOMContentLoaded", addDetailsBehaviourIfNotSupported, false);
