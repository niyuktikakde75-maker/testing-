let str = "javascript";
let reversed = str.split("").reverse().join("");
console.log(reversed);

//2.to check whether a string is a palindrome
let str = "level";
let reversed = str.split("").reverse().join("");
console.log(str === reversed);

//3.find factorial of a number.
let n =5;
let fact = 1;
for(let i =1;i<=n;i++){
    fact *= i;
}
console.log(fact);


//4 check whether a number is prime.
let num = 17;
let prime = true;
for(let i =2;i<= Math.sqrt(num); i++){
    if(num % i == 0){
        prime = false;
        break;
    }
}
console.log(prime);


//5 fimd largest element in an array.
let arr =[10,45,32,78,56];
let max = arr[0];
for(let i =1; i<arr.length ;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max);

//6.find second largest in an array.
let array=[10,45,32,78,56];
arr.sort((a,b)=>b-a);
console.log(arr[1]);






