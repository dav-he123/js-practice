const printInFrame = function (list) {
  let lister = list.split(" ");
  console.log(lister);
  const longest = longestStr(lister);
  // const longest = longestStr(lister).length;

  const border = repeat("*", longest);

  console.log(border);
  for (const word of lister) {
    console.log(`* ${word}${repeat(" ", longest - word.length + 1)}*`);
  }
  console.log(border);
};

const repeat = function (str, times) {
  let result = str;
  let ans = " ";
  // let result = " ";

  for (let i = 0; i < times; i++) {
    ans += result;
  }

  return ans;
};

// const longestStr = function (listAns) {
//   // let longest = listAns[0];
//   let longest;
//   // console.log(longest);

//   for (const str of listAns) {
//     longest = str;
//   }

//   return longest;
// };

const longestStr = function (listAns) {
  let longestWord = 0;
  for (let i = 0; i < listAns.length; i++) {
    if (listAns[i].length > longestWord) {
      longestWord = listAns[i].length;
    }
  }
  return longestWord;
};

// Test driver code, do not modify
printInFrame("May the force be with you");
printInFrame("Here's Johnny!");
printInFrame("Supercalifragalisticexpialadocious");
printInFrame("Lost, like tears in the rain");
