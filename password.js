let args = process.argv;

const password = function (inputtedPassword) {
  // let ansString = "";
  let array = [];

  for (let i = 0; i < inputtedPassword.length; i++) {
    array.push(inputtedPassword[i]);
  }

  // console.log(array);

  for (let j = 0; j < array.length; j++) {
    if (array[j] === "a") {
      array[j] = array[j].replace(/a/g, "4");
    } else if (array[j] === "e") {
      array[j] = array[j].replace(/e/g, "3");
    } else if (array[j] === "o") {
      array[j] = array[j].replace(/o/g, "0");
    } else if (array[j] === "l") {
      array[j] = array[j].replace(/l/g, "1");
    }
  }

  let answer = array.join("");

  return answer;
};

password(args[2]);

console.log(password(args[2]));
