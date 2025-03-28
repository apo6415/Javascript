const sentence = "The quick  age=74 the lazy dog. age=65";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`, sentence.length);

let every4Chars = '';
let captureFollowingDigits = false;
let numberSoFar = '';
let counter = 0;
let stringCounter = 0;

for (const charAtIndex of sentence) {
  stringCounter++;
  console.log("char At",  charAtIndex)
  console.log(every4Chars.length)

  if (!captureFollowingDigits) {
    if (every4Chars.length < 4 && charAtIndex != " ") {
      every4Chars = every4Chars.concat(charAtIndex)
      console.log('Print so far - ', every4Chars);
      if (every4Chars.length = 4 && every4Chars === 'age=') {
        console.log("age =  found -", every4Chars)
        every4Chars = '';
        captureFollowingDigits = true;
      }
    } else if (every4Chars.length = 4) {
      every4Chars = '';
    }
  } else if (captureFollowingDigits && (charAtIndex != " ")) {
    console.log("Number found - ", charAtIndex);
    numberSoFar = numberSoFar.concat(charAtIndex)
  } else if (captureFollowingDigits && (charAtIndex === " " || charAtIndex === "")) {
    captureFollowingDigits = false;
    console.log("Full Integer found - ", numberSoFar);
    if (parseInt(numberSoFar) > 50) {
      counter++;
    }
    numberSoFar = '';
  }   
}


console.log("Counter = ", counter)
