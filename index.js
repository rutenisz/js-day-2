// task 1 concatenate

const favoriteCity = "New York";
console.log("My favorite city: " + favoriteCity);

// task 2 string interpolation

const myName = "Ruta";
const dreamCity = "New York";
console.log(
  "My name is " +
    `${myName}` +
    ". The city I want to visit most is " +
    `${dreamCity}` +
    "."
);

// task 1 CAO

// 1
const x = 5;
const y = 10;
const z = x + y;
console.log(z); //alert(z)

// 2

const text1 = "Text one";
const text2 = "Text 1";
console.log("Line 30:" + (text1 == text2));

//3

const first = 10;
const second = "10";

console.log(first === second);
console.log(first != second);
console.log("Line 39: " + (first == second));

// 4

const transaction = (currentBalance, transaction) => {
  if (currentBalance + transaction >= 0) {
    return true;
  } else {
    return false;
  }
};

console.log(transaction(50, -50));
console.log(transaction(50, 50));
console.log(transaction(50, -51));
console.log("Line 54: " + transaction(50, 51));

// 5 extra

const num1 = 20;
const num2 = 4;
console.log(num1 % num2 === 0);

// task 3 human year into dog year

const yearCalculation = (name, humanYear) => {
  const firstYearsAge = 2 * 10.5;
  const lastYearsAge = (humanYear - 2) * 4;
  const dogYear = firstYearsAge + lastYearsAge;

  return (
    "My name is: " +
    name +
    ", in human years I am " +
    humanYear +
    " years old and that means I am " +
    dogYear +
    " years old in dog years."
  );
};
console.log(yearCalculation("Ruta", 24));

// task 4 plant observation

const plantObservation = (plantHeight, yearsOfGrowth) => {
  const warmSeasonGrowth = plantHeight * 0.25; // how many cm plant grows during warm season
  const coldSeasonGrowth = plantHeight * 0.05; // how cm plant grows during cold season
  const totalYearGrowth = warmSeasonGrowth + coldSeasonGrowth; // how much plant growths in one year
  const finalHeight = totalYearGrowth * yearsOfGrowth + plantHeight; // final height of the plant

  return (
    "The plant's initial height is " +
    plantHeight +
    "m and it's expected height after " +
    yearsOfGrowth +
    " years is " +
    finalHeight +
    "m."
  );
};

console.log(plantObservation(2, 15));

// task 5

const currencyConversion = (
  firstCurrency,
  firstCurrencyUnit,
  secondCurrencyUnit,
  exchangeRate
) => {
  const convertedAmount = firstCurrency * exchangeRate; // padauginam is exchange rate
  return `${firstCurrency} ${firstCurrencyUnit} is equal to ${convertedAmount} ${secondCurrencyUnit}`;
};
console.log(currencyConversion(1000, "USD", "EUR", 0.85));
console.log(currencyConversion(50, "EUR", "PLN", 4.5));
