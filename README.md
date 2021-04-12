# Notes App

## User Stories:

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

```
As a programmer
I can use shortcodes like `:fire:` that get converted into emojis like 🔥
So I can record notes with fun little pictures
```

###MVP:

Notes:
- Separate js class for notes
- Return first 20 characters


List of notes:
- Separate class for list of notes, consisting of notes
- New note
- View note

Index.html:
- Displays the above


###Phase 2:

Notes class
- Edit notes

List of notes class
- Delete notes


###Model:

Class Note {
	constructor (content) {
		this.content = content
	}

	preview () {
		return string 20 characters
	}
}


Class List {
	constructor () {
		this.store = []
	}

	createNote (content) {
		add created note to this.store
	}
}















