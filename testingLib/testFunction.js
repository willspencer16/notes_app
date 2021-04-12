// add your tests below and run with the testRunner.html

function isItTheDuckingSame(executedFunction, expectedOutput, description) {
  if (executedFunction === expectedOutput) {
    console.log(`%c ${description} - its chilling`,'background: #222; color: #BADA55');
  } else {
    console.log(`%c ${description} - its ducked`,'color: #FF0000')
  }
}

isItTheDuckingSame("Test", "Test", "Is this working? ")
isItTheDuckingSame("Tester", "Test", "Is this working? ")

isItTheDuckingSame("test".length, 4, "tests for instance variables")
