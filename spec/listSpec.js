//isItTheDuckingSame(executedFunction, expectedOutput, description)

let list = new List();
let list2 = new List();
let testContent = "This is my first note, I wrote it with Stu.";
// let testNote = new Note(testContent);

console.log("THESE ARE THE list.js TESTS!")

isItTheDuckingSame(list.store.length, 0, 'list.store should be a empty array with length 0');
isItTheDuckingSameArray(list.store, [], 'list.store should be a empty array');

list.createNote(testContent)
isItTheDuckingSame(list.store[0].getContent(), testContent , 'list.store with one note in it should return an array with that one note, checking the first item content in array');

// I realised this below test is now kind of pointless as it stores instances of Note, but this means you cannot test equality properly without dummys, so created the below work around which works.
let testNote = list.store[0]
isItTheDuckingSameArray(list.store, [testNote] , 'list.store with one note in it should return an array with that one note');

isItTheDuckingSame(list2.createNote(testContent).content, testContent, "Create Note function creates a note");

isItTheDuckingSame(list2.store[0].id, 'note1', "The note id should be note1");

isItTheDuckingSame((list2.createNote(testContent) instanceof Note), true, "Create Note function creates an instance of Note");

isItTheDuckingSame(list2.store[1].id, 'note2', "The note id should be note2");

isItTheDuckingSame(list.getPreviews()[0], "This is my first no\u2026", "reduces each note to 20 chars and returns them in an array");

let testNote2 = list.store[0]
isItTheDuckingSameArray(list.deleteNote(list.store[0].id), [testNote2], "Deleting a note removes it from store and returns it for deletion in the local storage")

isItTheDuckingSame(list.store.length, 0, 'after deletion it will have an empty store again')
// console.log(list.store)
// console.log(list.store[0].id)
