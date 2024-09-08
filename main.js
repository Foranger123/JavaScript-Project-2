function sami(str){
    return str.split("").reverse().join("")

}
console.log(sami("string"))
function daly(str){
return str.length


}
console.log(daly("vallhalla"))



function fahmi(sentence){
   const word = sentence.split(" ")
for(var i=0; i<word.length;i++){

    word[i]=word[i][0].toUpperCase() + word[i].slice(1)
}
return word.join(" ")
}
console.log(fahmi("js is shit"))

var arr=[1,5,4,7,5]
function count(arr){
 return [Math.max(...arr), Math.min(...arr)  ]

}
console.log(count(arr))


var arr=[1,5,4,7,5]
function counter(arr){

 let sum=0
 for( var i=0; i<arr.length;i++){
    sum+=arr[i]
 }
 return sum 
}
console.log(counter(arr))




function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  const numbers = [1, 6, 3, 9, 2, 5];
  
  // Condition to filter numbers greater than or equal to 5
  console.log(filterArray(numbers, num => num >= 5)); // ➞ [6, 9, 5]
  
  // Condition to filter even numbers
  console.log(filterArray(numbers, num => num % 2 === 0)); // ➞ [6, 2]
  

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  

  console.log(factorial(5));  // ➞ 120
  console.log(factorial(3));  // ➞ 6
  console.log(factorial(0));  // ➞ 1
  


  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(isPrime(7));  // ➞ true
  console.log(isPrime(10)); // ➞ false
  


  function fibonacci(n) {
    let fibSequence = [0, 1]; // Starting the sequence with 0 and 1
  
    if (n <= 1) {
      return fibSequence.slice(0, n); // If n is 0 or 1, return the corresponding slice
    }
  
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]); // Generate the next Fibonacci number
    }
  
    return fibSequence;
  }

  console.log(fibonacci(5)); // ➞ [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // ➞ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(1)); // ➞ [0]
console.log(fibonacci(0)); // ➞ []
