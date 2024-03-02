// Odd number

//IIFE

(function printOdd(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            console.log(arr[i]);
        }
    }

})([1, 2, 3, 4, 5, 6, 7]);

//Anonymous
let printOddNumber = function (arr){
    for (let i = 0;i < arr.length; i++){
        if (arr[i] % 2 != 0){
            console.log(arr[i]);
        }
    }
};
printOddNumber([1, 2, 3, 4, 5, 6, 7]);

//Arrow Function
let printOddinArrow = (arr) => {
    for(let i = 0;i < arr.length; i++){
        if (arr[i] % 2 != 0){
            console.log(arr[i]);
        }
    }
};
printOddNumber([1, 2, 3, 4, 5, 6, 7]);

//Convert all strings to title caps in a string array

//IIFE
const stringArray = ["hello world", "javascript is fun", "title caps"];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
})(stringArray);

console.log(stringArray);

//Anonymous
const stringArra = ["hello world", "javascript is fun", "title caps"];

const titleCaps = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
};

titleCaps(stringArray);
console.log(stringArray);

//Arrow function
const stringAray = ["hello world", "javascript is fun", "title caps"];

const titleCap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
};

titleCap(stringArray);
console.log(stringArray);

//Sum of all numbers in array

//IIFE
const numberArray = [1, 2, 3, 4, 5];

const sum = (function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(numberArray);

console.log(sum);

//Anonymous
const numberArra = [1, 2, 3, 4, 5];

const total = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const result = total(numberArra);
console.log(result);

// Arrow function
const numberArr = [1, 2, 3, 4, 5];

const add = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

const res = add(numberArr);
console.log(res);

//Return all prime numbers in a array
//IIFE
const numberA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function(arr) {
  const isPrime = function(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  return arr.filter(num => isPrime(num));
})(numberA);

console.log(primeNumbers);

//Anonymous
const numberAray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumber = function(arr) {
  const isPrime = function(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  return arr.filter(num => isPrime(num));
};

const reslt = primeNumber(numberAray);
console.log(reslt);

//Arrow Function
const numberAay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNum = (arr) => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  return arr.filter(num => isPrime(num));
};

const r = primeNum(numberAay);
console.log(r);

//Return all the palindromes in an array
//IIFE
const stringA = ["level", "hello", "madam", "radar", "javascript"];

const palindromes = (function(arr) {
  const isPalindrome = function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  return arr.filter(word => isPalindrome(word));
})(stringA);

console.log(palindromes);



