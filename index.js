// 1.Write a recursive function to calculate the product of two numbers.

function recProduct(num1,num2) {
   if(num1 < num2) {
       return recProduct(num2,num1);
   } else if (num2 !== 0){
       return (num1 + recProduct(num1,num2 - 1));
   } else {
       return 0;
   }
}

console.log(recProduct(3,5));

//2.Given an array of numbers. Write a recursive function to find its minimal element.
function minElem(arr){
    if(arr.length < 2){
        return arr[0];
    } 
    return Math.min(arr.shift(),minElem(arr));
}

console.log(minElem([3,5,7,9,15]));

//3.Reverse string recursively.
function revString(str){
    if(str.length === 0){
        return str;
    }
    return revString(str.substr(1))+str[0];
}

console.log(revString('hello world'));

//4.Given an array of numbers which is almost sorted in ascending order. Find the index where the sorting order is violated.
//[-9, -4, -4, 3, 12, 4, 5] -> 5
//[2, 12, 15, 48, 64] -> -1

function sortArr(array1){
    let bool = false;
    for(let i = 0;i < array1.length;i++){
        if(array1[i] > array1[i+1]) {
            return array1.indexOf(array1[i+1]);
            bool = true;
        }
    }
    if(!bool){
           return -1;
    }
}

console.log(sortArr([-9, -4, -4, 3, 12, 4, 5]));
console.log(sortArr([2, 12, 15, 48, 64]));

//5.Calculate the sum of all numbers in an array containing nested arrays.

function sumNest(array2){
    let sum = 0;
    for(let i = 0 ; i < array2.length; i++){
        if(typeof array2[i] === "number"){
            sum += array2[i];
        } else if(array2[i] instanceof Array){
            sum+=sumNest(array2[i]);
        }
    }
    return sum;
}

console.log(sumNest([4,5,[2,3],2]));

//Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.shift())
//[6, 78, ‘n’, 0, 1] -> [78, ‘n’, 0, 1]
//[5] -> []
//[] -> []

// iterative
let arr=[1,2,3,4];
let mas=[6, 78, 'n', 0, 1];

function rem(arr){
 if(arr.length > 1) {
   arr.splice(0, 1)
 } else {
   arr = [];
 }
 return arr;
}
console.log(rem(arr));
console.log(rem(mas));
console.log(rem([5]));
 // ռեկուրսիվ եղանակով կավելացնեմ 

//Write a recursive function to calculate the sum of numbers in a range. 
function sumRange(origin,end){
    if(origin === end){
        return end;
    } else {
        return origin + sumRange(origin + 1,end);
    }
}

console.log(sumRange(4,9));
