// add your tests below and run with the TestRunner.html

function isItTheDuckingSame(executedFunction, expectedOutput, description) {
  if (executedFunction === expectedOutput) {
    console.log(`%c ${description} - its chilling`,'background: #222; color: #BADA55');
  } else {
    console.log(`%c ${description} - its ducked`,'color: #FF0000')
  }
}
