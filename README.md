# Notes App

Notes App created by:
- Will - willspencer16
- Alex - yates101
- Stu - StuBehan
- Jack - jackmcc08

The was created with vanilla javascript, HTML and CSS. It also incorporates an emoji API to generate emojis based on shortcodes and utilise localContent on your browser to preserve the notes data.

As part of development we also created our own testing script - `Is it ducking working?`

The app is hosted on github pages, please visit the following on your browser (tested on chrome and firefox):
- Notes App: https://willspencer16.github.io/notes_app/
- Test page for App: https://willspencer16.github.io/notes_app/TestRunner.html

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

### MVP:

Notes:
- [x] Separate js class for notes
- [x] Return first 20 characters


List of notes:
- Separate class for list of notes, consisting of notes
- New note
- View note

Index.html:
- Displays the above


### Phase 2:

Notes class
- Edit notes

List of notes class
- Delete notes


### Model:

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


## Local Storage

makeNote on click
	-> createNote
		-> store.push(content)
			-> mountPreviews
				-> getPreviews(store)
					-> note.preview()
