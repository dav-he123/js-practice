let args = process.argv;
// console.log(args[2]);

const diceRoller = function (numberOfRolls) {
  // console.log(numberOfRolls);
  // console.log(numberOfRolls);
  let answer;
  for (let i = 0; i < numberOfRolls; i++) {
    answer = Math.floor(Math.random() * Math.floor(6));
    console.log(answer);
  }

  return answer;
};

diceRoller(args[2]);
