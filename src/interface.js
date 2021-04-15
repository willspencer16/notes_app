// preview DOM interactivity

let list = new List();
let noteArea = document.getElementById("noteArea");
let previewsContainer = document.getElementById('previews');
let buttonContainer = document.getElementById('buttons');
let duckingStorage = window.localStorage;

if (duckingStorage.getItem('Store') !== null) {
  JSON.parse(duckingStorage.getItem('Store')).forEach((note) => {
    deleteFromLocalStorage(note)
    storesNotesLocally(list.createNote(note.content))
  });
}


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function mountPreviews(listInstance) {
  noteArea.value = '';
  previewsContainer.innerHTML = '';

  listInstance.store.forEach(function (note) {
    let notesList = `<p id='${note.id}'>${note.preview()}</p>`
    previewsContainer.innerHTML += notesList
  });
  enableListeners()
}

function addUpdateButton(id) {
  if(document.getElementById('update-button') === null) {
    buttonContainer.insertAdjacentHTML('beforeend', '<button id="update-button">Update</button>');

    var updateButton = document.getElementById('update-button')

    updateButton.addEventListener('click', function() {
      const found = list.store.find(note => note.id === id)

      postData('https://makers-emojify.herokuapp.com/', { "text": noteArea.value })
      .then(data => {
        found.updateNote(data.emojified_text)

        updateLocalStorage(found)

        mountPreviews(list);
        updateButton.remove()
        document.getElementById('delete-button').remove()
      });
    })
  }
}

function addDeleteButton(id) {
  if(document.getElementById('delete-button') === null) {
    buttonContainer.insertAdjacentHTML('beforeend', '<button id="delete-button">Delete</button>');

    var deleteButton = document.getElementById('delete-button')

    deleteButton.addEventListener('click', function() {
      const found = list.store.find(note => note.id === id)

      list.deleteNote(found.id)
      deleteFromLocalStorage(found)

      mountPreviews(list)
      deleteButton.remove()
      document.getElementById('update-button').remove()
    })
  }
}

function enableListeners () {
  document.querySelectorAll('p').forEach(item => {
    item.addEventListener('click', function() {
      displayNote(this.id)
      addUpdateButton(this.id)
      addDeleteButton(this.id)
    })
  })
}

function displayNote(id) {
  const found = list.store.find(note => note.id === id)
  noteArea.value = found.content
}


function storesNotesLocally(note) {
  if (duckingStorage.getItem('Store') === null) {
    store = JSON.stringify(note)
    duckingStorage.setItem('Store', `[${store}]`);
  } else if (duckingStorage.getItem('Store') !== null) {
    let store = JSON.parse(duckingStorage.getItem('Store'));
    store.push(note)
    store = JSON.stringify(store)
    duckingStorage.setItem('Store', `${store}`);
  }
}

function updateLocalStorage(updatedNote) {
  let store = JSON.parse(duckingStorage.getItem('Store'));
  foundIndex = store.findIndex(note => note.id === updatedNote.id)
  store[foundIndex].content = updatedNote.content
  store = JSON.stringify(store)
  duckingStorage.setItem('Store', `${store}`);
}

function deleteFromLocalStorage(deletedNote) {
  let store = JSON.parse(duckingStorage.getItem('Store'));
  foundIndex = store.findIndex(note => note.id === deletedNote.id)
  console.log(store)
  store.splice(foundIndex, 1)
  console.log(store)
  store = JSON.stringify(store)
  duckingStorage.setItem('Store', `${store}`);
}

const createNote = document.getElementById('createNote');
createNote.addEventListener('click', makeNote);

function makeNote() {
  if (noteArea.value === "") {
    window.alert("You cannot save an empty note...DOOFUS!")
    return
  }

  postData('https://makers-emojify.herokuapp.com/', { "text": noteArea.value })
  .then(data => {

    var note = list.createNote(data.emojified_text);
    storesNotesLocally(note)

    mountPreviews(list)
});
}

mountPreviews(list)
