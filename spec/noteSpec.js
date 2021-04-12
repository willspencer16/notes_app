//isItTheDuckingSame(executedFunction, expectedOutput, description)

let shortNote = new Note ("Lorem")
let longNote = new Note ("Lorem ipsum vivamus and some")

isItTheDuckingSame(shortNote.preview(), "Lorem", "Preview returns a string")

isItTheDuckingSame(longNote.preview(), "Lorem ipsum vivamus ", "Preview returns a string with a max of 20 characters")

isItTheDuckingSame(longNote.getContent(), "Lorem ipsum vivamus and some", "getContent, gets content")