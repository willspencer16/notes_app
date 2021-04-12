
class Note {
	constructor (content) {
		this.content = content
	}

	preview () {
		return this.content.slice(0,20)
	}

  getContent() {
    return this.content;
  }
}