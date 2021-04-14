
class Note {
	constructor (content, num) {
		this.content = content
    this.id = `note${num}`
	}

	preview () {
    if(this.content.length > 20) {
      return this.content.slice(0,19) + '\u2026'
    }
    else {
      return this.content
    }
	}

  getContent() {
    return this.content;
  }

  updateNote(content) {
    this.content = content
  }
}
