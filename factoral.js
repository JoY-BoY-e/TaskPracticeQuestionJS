//Write a function to find the factorial of a number?

const num = 5;
function factorial(num){
    return num === 0 ? 1 : num * factorial(num-1);
}

function factorial2(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}

console.log(factorial(num)); // 120