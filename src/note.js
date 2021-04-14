
class Note {
	constructor (content, num) {
		this.content = content
    this.id = `note${num}`
	}

	preview () {
		return this.content.slice(0,20)
	}

  getContent() {
    return this.content;
  }
}
