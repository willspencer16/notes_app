//isItTheDuckingSame(executedFunction, expectedOutput, description)


let shortNote = new Note ("Lorem")
let longNote = new Note ("Lorem ipsum vivamus and some")

console.log("THESE ARE THE note.js TESTS!")

isItTheDuckingSame(shortNote.preview(), "Lorem", "Preview returns a string")

isItTheDuckingSame(longNote.preview(), "Lorem ipsum vivamus\u2026", "Preview returns a string with a max of 20 characters")

isItTheDuckingSame(longNote.getContent(), "Lorem ipsum vivamus and some", "getContent, gets content")

longNote.updateNote("Forget lorem, these ducks be chillin")

isItTheDuckingSame(longNote.getContent(), "Forget lorem, these ducks be chillin", 'Update function changes content')

isItTheDuckingSame(longNote.getContent(), "blah", 'This is a failed test')
