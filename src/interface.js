// preview DOM interactivity

let list = new List();
let noteArea = document.getElementById("noteArea")
let previewsContainer = document.getElementById('previews');

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
  listInstance.getPreviews().forEach(function (preview) {
    var newHeading = document.createElement('a')
    var previewText = document.createTextNode(preview);
    var gap = document.createElement('br');

    newHeading.appendChild(previewText);

    previewsContainer.appendChild(newHeading);
    previewsContainer.appendChild(gap);
  });
}

const createNote = document.getElementById('createNote');
createNote.addEventListener('click', makeNote, false);

function makeNote() {

  postData('https://makers-emojify.herokuapp.com/', { "text": noteArea.value })
  .then(data => {

    list.createNote(data.emojified_text);

    noteArea.value = '';
    previewsContainer.innerHTML = '';
    mountPreviews(list)
});  
}

mountPreviews(list)