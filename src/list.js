class List {
  constructor() {
    this.store = []
  }

  createNote(content) {
    postData('https://makers-emojify.herokuapp.com/', { "text": content })
    .then(data => {
      let newNote = new Note(data.emojified_text)
      this.store.push(newNote);

      noteArea.value = '';
      previewsContainer.innerHTML = '';
      mountPreviews(list)
  });  
  }

  getPreviews() {
    let result = [];
    this.store.forEach(function (note) {
      result.push(note.preview());
    })
    return result;
  }
 }
