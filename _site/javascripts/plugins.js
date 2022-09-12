export function getPlugins() {

  var element = document.getElementById('plugins');

  var plugins = window.navigator.plugins;

  if (plugins != undefined) {

    if (plugins.length == 0) {

      element.innerHTML = '(none)';
      element.setAttribute('class', 'blank');

    } else {

      var list = document.createElement('ul');

      for (var i = 0; i < plugins.length; i++) {
        var list_item = document.createElement('li');
        list_item.innerHTML = plugins[i].name
        list.appendChild(list_item);
      }

      element.appendChild(list);

    }

  } else {
    markUnavailable(element);
  }

}

