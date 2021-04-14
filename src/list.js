class List {
  constructor() {
    this.storage = window.localStorage
    this.store = []
  }

  createNote(content) {
      let newNote = new Note(content)
      this.store.push(newNote);
      console.log(this.storage.getItem('Store'))
      if (this.storage.getItem('Store') === null) { this.storage.setItem('Store', JSON.stringify('')) };
      let testStore = JSON.parse(this.storage.getItem('Store'))
      testStore.push(JSON.stringify(newNote))
      this.storage.setItem('Store', JSON.stringify(testStore));
      
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
