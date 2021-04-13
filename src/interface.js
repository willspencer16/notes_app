let list = new List();

const createNote = document.getElementById('createNote');
createNote.addEventListener('click', makeNote, false);

function makeNote() {
  list.createNote(document.getElementById("noteArea").value);
  // event.preventDefault();
  console.log(list.store[0]);
  document.getElementById("noteArea").value = '';
}

