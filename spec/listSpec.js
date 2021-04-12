//isItTheDuckingSame(executedFunction, expectedOutput, description)

let list = new List();
let list2 = new List();
// let Note = "dummyNote";
let testContent = "This is my first note, I wrote it with Stu.";

isItTheDuckingSame(list.store.length, 0, 'list.store should be a empty array');

list.createNote(testContent)
isItTheDuckingSame(list.store[0], testContent , 'list.store with one note in it should return an array with that one note');
isItTheDuckingSame(list.store, ["This is my first note, I wrote it with Stu."] , 'list.store with one note in it should return an array with that one note');

isItTheDuckingSame(list2.createNote(testContent), testContent, "Create Note function creates a note");

isItTheDuckingSame((list2.createNote(testContent) instanceof Note), true, "Create Note function creates an instance of Note");

isItTheDuckingSame(list.getPreviews()[0], "This is my first not", "reduces each note to 20 chars and returns them in an array");
