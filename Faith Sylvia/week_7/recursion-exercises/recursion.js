// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array,index=0,max=array[index]){
    // This function returns the largest number in a given array.
  if (index>array.length){
    console.log(max);
    return max;
  } else {
    if (array[index] > max) {
      max = array[index];
    }
    return findMax(array, index+1, max)
  }
}


function factorial(num){

  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
}

1,1,2,3,5,8,13,21,34,55,89,144

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

function coinFlips(n, array){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"

  if (n === 1) {
    const optionsArray = ['H', 'T'];
    return optionsArray;
  } else {
    optionsArray.push(coinFlips(n-1));
  }

}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
