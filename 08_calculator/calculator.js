console.log("Start of modules");


const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	if(array.length == 0){
    return 0;
  }else{
    for(let i = 0; i <= (array.length - 1); i++){
      sum += array[i];
      console.log("Sum: " + sum)
    }
  }
  return sum;
};

const multiply = function(a) {
  let x = a[0];
  for(let y = 1; y <= (a.length - 1); y++){
    x = x * a[y];
  }
  return x;
};


const power = function(a,b) {
	let sum = a;
    for (let i = 1; i < b; i++){
      sum = sum * a;
    }
    return sum;
};

const factorial = function(a) {
  if (a < 0){
    console.log("Cannot factorial a negative number");
  }
  else if(a === 0){
    return 1;
  }else{
    let fact = 1;
    for(i = 1; i <= a; i++){
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
