class List {
  constructor() {
    this.store = []
  }

  createNote(content) {
      let newNote = new Note(content)
      this.store.push(newNote);
      return newNote;
  }

  getPreviews() {
    let result = [];
    this.store.forEach(function (note) {
      result.push(note.preview());
    })
    return result;
  }
 }
