// preview DOM interactivity

let list = new List();

function mountPreviews(listInstance) {

  var previewsContainer = document.getElementById('previews');

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
  list.createNote(document.getElementById("noteArea").value);
  document.getElementById("noteArea").value = '';
  mountPreviews(list)
}
