// Your code here

//function declartation
function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`;
}

//function expression :> doesn't get hoisted. If mondayWork was a string, it would be hoisted.
let mondayWork = function(string = "go to the office") {
  return `This Monday, I will ${string}.`;
};

//scopeChain
function wrapAdjective(string = "*") {
  return function(param = "special") {
    return `You are ${string + param + string}!`;
  };
}

//functions as values in object
const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

function actionApplyer(start, arrOfFunctions) {
  let a = start;

  arrOfFunctions.forEach(func => {
    a = func(a);
  });
  return a;
}
