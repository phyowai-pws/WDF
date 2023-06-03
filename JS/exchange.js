

const rates = {
    usd : 2100,
    sgd : 1490,
    eur : 2108
}

function usdToMMK(USD) {
    return (USD*rates.usd)+" MMK"
}
//usd to mmk
function toMMK(amount,currency){
    return (amount*rates[currency])+"MMK"
}

//mmk to any currency
function toCurrency(inputMMK,currency){
    return (inputMMK/rates[currency])+ currency;
}
//any currency
function toAnyCurrency(inputAmount,fromCurrency,toCurrency){
    let mmk = inputAmount* rates[fromCurrency];
    let result = mmk/ rates[toCurrency];

    return result+toCurrency;
}
// console.log(usdToMMK(100));
// console.log(toMMK(100,"usd"));
// console.log(toMMK(100,"sgd"));
// console.log(toMMK(100,"eur"));
// console.log(toCurrency(500000, "usd"));

console.log(toAnyCurrency(50,"usd","sgd"));
console.log(toAnyCurrency(50,"sgd","sgd"));
console.log(toAnyCurrency(50,"eur","usd"));


