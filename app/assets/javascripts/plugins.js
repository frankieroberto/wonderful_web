

function getPlugins() {

  var element = document.getElementById('plugins');

  var plugins = window.navigator.plugins;

  if (plugins != undefined) {

    if (plugins.length == 0) {

      element.innerHTML = '(none)';
      element.setAttribute('class', 'blank');

    } else {

      var table = document.createElement('table');


      for (var i = 0; i < plugins.length; i++) {

        var tr = document.createElement('tr');

        var th = document.createElement('th');
        th.innerHTML = plugins[i].name
        var td = document.createElement('td');
        td.innerHTML = plugins[i].description

        tr.appendChild(th);
//        tr.appendChild(td);
        table.appendChild(tr);

      }

      element.appendChild(table);

    }

  } else {
    markUnavailable(element);
  }

}

document.addEventListener("DOMContentLoaded", getPlugins, false);
