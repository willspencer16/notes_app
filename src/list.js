class List {
  constructor() {
    this.store = []
    this.counter = 1
  }

  createNote(content) {
      let newNote = new Note(content, this.counter)
      this.store.push(newNote);
      this.counter++
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
