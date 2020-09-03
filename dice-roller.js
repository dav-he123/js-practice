let args = process.argv;
// console.log(args[2]);

const diceRoller = function (numberOfRolls) {
  let answer;
  let array = [];
  for (let i = 0; i < numberOfRolls; i++) {
    answer = Math.floor(Math.random() * 6) + 1;
    // console.log(answer);

    array.push(answer);
  }

  let ans = array.join(" ");

  console.log(ans);
  return ans;
};

diceRoller(args[2]);
