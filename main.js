let validityTest = (testStr) => {
  let validChars = "abcdefghijklmnopqrstuvwxyz";
  let validCount = 0;
  for (let i = 0; i < testStr.length; i++) {
    if (!validChars.includes(testStr[i].toLowerCase())) {
      break;
    } else {
      validCount += 1;
    }
  }

  if (validCount === testStr.length) {
    return true;
  } else {
    return false;
  }
};

let vowelCount = (testStr) => {
  let vowels = "aeiouy";
  let count = 0;

  for (let i = 0; i < testStr.length; i++) {
    if (vowels.includes(testStr[i])) {
      count += 1;
    }
  }

  return count;
};

let longestWordTest = (testSentence) => {
  let testArr = testSentence.split(" ");
  let longestWord = "";
  let wordLength = 0;

  for (let i = 0; i < testArr.length; i++) {
    if (validityTest(testArr[i])) {
      if (testArr[i].length > wordLength) {
        longestWord = testArr[i];
        wordLength = testArr[i].length;
      } else if (testArr[i].length === wordLength) {
        if (vowelCount(testArr[i]) > vowelCount(longestWord)) {
          longestWord = testArr[i];
          wordLength = testArr[i].length;
        } else if (vowelCount(testArr[i]) === vowelCount(longestWord)) {
          console.log("Unhandled Edge Case");
        }
      } else {
        // Move On
      }
    }
  }

  return longestWord;
};

console.log(longestWordTest("Old man Sean had a farm animal named Steve"));
