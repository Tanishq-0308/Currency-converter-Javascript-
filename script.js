const amount = document.getElementById("amount");
const convertedAmountElement = document.getElementById("converted-amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const result = document.getElementById("result");
const converterContainer = document.querySelector(".converter-container");

const countries = [
  { code: "USD", currency: "United States Dollar" },
  { code: "CNY", currency: "Chinese Yuan" },
  { code: "JPY", currency: "Japanese Yen" },
  { code: "GBP", currency: "Pound Sterling" },
  { code: "INR", currency: "Indian Rupee" },
  { code: "EUR", currency: "Euro" },
  { code: "EUR", currency: "Euro" },
  { code: "BRL", currency: "Brazilian Real" },
  { code: "EUR", currency: "Euro" },
  { code: "CAD", currency: "Canadian Dollar" },
  { code: "KRW", currency: "South Korean Won" },
  { code: "AUD", currency: "Australian Dollar" },
  { code: "EUR", currency: "Euro" },
  { code: "IDR", currency: "Indonesian Rupiah" },
  { code: "TRY", currency: "Turkish Lira" },
  { code: "CHF", currency: "Swiss Franc" },
  { code: "PLN", currency: "Polish Złoty" },
  { code: "EUR", currency: "Euro" },
  { code: "RUB", currency: "Russian Ruble" },
  { code: "SEK", currency: "Swedish Krona" },
  { code: "MXN", currency: "Mexican Peso" },
  { code: "MYR", currency: "Malaysian Ringgit" },
  { code: "SGD", currency: "Singapore Dollar" },
  { code: "NOK", currency: "Norwegian Krone" },
  { code: "NZD", currency: "New Zealand Dollar" },
  { code: "EUR", currency: "Euro" },
  { code: "EUR", currency: "Euro" },
  { code: "CZK", currency: "Czech Koruna" },
  { code: "ILS", currency: "Israeli Shekel" },
  { code: "EUR", currency: "Euro" },
  { code: "DKK", currency: "Danish Krone" },
  { code: "EUR", currency: "Euro" },
  { code: "THB", currency: "Thai Baht" },
  { code: "EUR", currency: "Euro" },
  { code: "EUR", currency: "Euro" },
  { code: "HUF", currency: "Hungarian Forint" },
  { code: "ZAR", currency: "South African Rand" },
  { code: "ARS", currency: "Argentine Peso" },
  { code: "CLP", currency: "Chilean Peso" },
  { code: "PHP", currency: "Philippine Peso" },
  { code: "AED", currency: "United Arab Emirates Dirham" },
];

countries.forEach((country) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");

  option1.value = option2.value = country.code;
  option1.textContent =
    option2.textContent = `${country.code}(${country.currency})`;
  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);

  fromCurrency.value = "INR";
  toCurrency.value = "USD";
});

const getExchangeRate = async () => {
  const amountInput = parseFloat(amount.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;
  result.textContent = "Fetching Exchange Rates...";

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${from}`
    );
    const data = await response.json();
    
    if(typeof conversionRate === 'undefined'){
        const conversionRate = data.rates[to];
        const convertedAmount = (amountInput * conversionRate).toFixed(2);
    }
    else{
        convertedAmountElement.value = convertedAmount;
        result.textContent = `${amountInput} ${from} = ${convertedAmount} ${to}`;
    } 
    
  } catch (error) {
    converterContainer.innerHTML="<h2>Error while fetching exchange rates!!!</h2>"
  }
};

amount.addEventListener("input", getExchangeRate);
fromCurrency.addEventListener("change", getExchangeRate);
toCurrency.addEventListener("change", getExchangeRate);
window.addEventListener("load", getExchangeRate);
