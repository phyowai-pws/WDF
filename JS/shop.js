

let fruits = {
    mango : 200,
    banana : 50,
    apple : 100,
    orange : 150
}

let total = 0;

function tax(amount,taxRate = 5){
    return amount * (taxRate/100)
}

function buy(fruitName,quantity){
    let cost = quantity * fruits[fruitName]
    // let actualCost = cost + tax(cost);
    total += cost;
    // return fruitName+" : "+ quantity+" : "+ cost + " mmk"
    return `${fruitName} : ${quantity} : ${cost} mmk`
}

console.log(buy("mango",5));
console.log(buy("orange",5));
console.log(buy("apple",5));
console.log(buy("banana",15));

// console.log(tax())

console.log("Total Cost :",total,"mmk");
console.log("Tax :",tax(total),"mmk");
console.log("Net Total :",total + tax(total),"mmk");



