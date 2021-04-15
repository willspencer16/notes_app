// preview DOM interactivity

let list = new List();
let noteArea = document.getElementById("noteArea");
let previewsContainer = document.getElementById('previews');
let buttonContainer = document.getElementById('buttons');

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
      found.updateNote(noteArea.value)
      mountPreviews(list);
      updateButton.remove()
    })
  }
}

function enableListeners () {
  document.querySelectorAll('p').forEach(item => {
    item.addEventListener('click', function() { 
      displayNote(this.id)
      addUpdateButton(this.id)
    })
  })
}

function displayNote(id) {
  const found = list.store.find(note => note.id === id)
  noteArea.value = found.content
}

const createNote = document.getElementById('createNote');
createNote.addEventListener('click', makeNote);

function makeNote() {

  postData('https://makers-emojify.herokuapp.com/', { "text": noteArea.value })
  .then(data => {

    list.createNote(data.emojified_text);

    mountPreviews(list)
});  
}

mountPreviews(list)