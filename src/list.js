class List {
  constructor() {
    this.store = []
  }

  createNote(content) {
    let newNote = new Note(content)
    this.store.push(newNote);
    return newNote
  }
 }
