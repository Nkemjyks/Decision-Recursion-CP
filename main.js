//Leap Year Checker: 
//Create a function that takes a year as input and determines whether it is a leap year or not. 
//Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
function leapCheck(num){
    return num%100==0?num%400==0?true:false:num%4==0?true:false;
}
console.log(leapCheck(1000));
console.log(leapCheck(2000));
console.log(leapCheck(1239));
console.log(leapCheck(2348));

// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

function ticketPrice(age){
    return age<=12?"$10":age<18?"$15":"$20";
}

console.log(ticketPrice(12));
console.log(ticketPrice(17.5));
console.log(ticketPrice(18));
console.log(ticketPrice(121));

// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. 
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the 
// sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fib(n){
    
    return n<1?"input a positive number greater than 0":n==1?0:n==2?1:fib(n-1)+fib(n-2);
}

console.log(fib(-1));
console.log(fib(10));
console.log(fib(6));
console.log(fib(7));




// Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function pow(x,n){
   return n==0?1:n>0?mux():div();
    function mux(){
        n--;
        return x*pow(x,n);
    }
    function div(){
        n++;
        return pow(x,n)/x;
    }
}

console.log(pow(2,0));
console.log(pow(2,1));
console.log(pow(2,-5));
console.log(pow(2,2));

// Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), 
// ignoring spaces, punctuation, and capitalization.

// function pal(str, chk=''){
//     if(chk+'hi'=='hi'){
//         return pal(str.trim().split('').reverse().join('').toLowerCase(), str.trim().toLowerCase());
//     }
//     else{
//         return str==chk;
//     }
    
    
// }

// console.log(pal('asdf'));
// console.log(pal('Asd,f f,dsa'));
