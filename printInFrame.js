const printInFrame = function (list) {
  let lister = list.split(" ");
  const longest = longestStr(lister).length;
  const border = repeat("*", longest);

  console.log(border);
  for (const word of lister) {
    console.log(`* ${word}${repeat(" ", longest - word.length + 1)}*`);
  }
  console.log(border);
};

const repeat = function (str, times) {
  let result = str;

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

const longestStr = function (listAns) {
  let longest = listAns[0];

  for (const str of listAns) {
    longest = str;
  }

  return longest;
};

// Test driver code, do not modify
printInFrame("May the force be with you");
printInFrame("Here's Johnny!");
printInFrame("Supercalifragalisticexpialadocious");
printInFrame("Lost, like tears in the rain");
