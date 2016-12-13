function initializeIndexedDatabase() {

  var element = document.getElementById('indexed-database');

  if (window.indexedDB != undefined) {

    var db_request = indexedDB.open('demo', 3);
    db_request.addEventListener('success', databaseOpened);
    db_request.addEventListener('error', databaseOpenFailed);
    db_request.addEventListener('upgradeneeded', databaseUpgrade);

//    element.innerText = 'Available';
  } else {
    markUnavailable(element);
  }

}

function databaseOpened(event) {

  var element = document.getElementById('indexed-database');

  var db = event.target.result;

  var db_object_store = db.transaction("examples").objectStore("examples");

  var db_cursor = db_object_store.openCursor();

  element.innerHTML = '<table class="db-table"><thead><tr><th>ID</th><th>Value</th><th></th></tr></thead><tbody id="db-table-body"></tbody></table><button id="add-row">Add row</button>';

  var button = document.getElementById('add-row');
  button.addEventListener('click', function() { addDatabaseRow(db) });

  db_cursor.onsuccess = function(event) {

    var cursor = event.target.result;
    if (cursor) {

      var tbody = document.getElementById('db-table-body');
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + cursor.key + '</td><td>' + cursor.value + '</tr><tr><button data-key="' + cursor.key + '">Delete</button></tr>';

      row.getElementsByTagName('button')[0].addEventListener('click', deleteRow);

      tbody.appendChild(row);

      cursor.continue();
    }
    else {
      //console.log(tbody);
      //tbody.appendChild(document.createElement('tr'))
      //alert("No more entries!");
    }
  };

}

function databaseOpenFailed(event) {

  var element = document.getElementById('indexed-database');
  element.innerText = 'Database failed to open (' + event.target.errorCode + ')';
}

function databaseUpgrade(event) {

  var db = event.target.result;

  var object_store = db.createObjectStore("examples", { autoIncrement : true });
}

function deleteRow(event) {

  console.log(event.target.getAttribute('data-key'));
}

function addDatabaseRow(db) {

  var object_store = db.transaction(["examples"], 'readwrite').objectStore("examples");

  object_store.add('');

}

document.addEventListener("DOMContentLoaded", initializeIndexedDatabase, false);