let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");


let rateUSD = 4.3915;
let rateGBP = 5.2788;
let rateEUR = 4.6809;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "USD":
        result = amount * rateUSD;
        break;

        case "GBP":
        result = amount * rateGBP;
        break;

        case "EUR":
        result = amount * rateEUR;
        break;
    }

    resultElement.value = result.toFixed(2)

});