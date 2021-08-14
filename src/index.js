module.exports = function toReadable (number) {
// const toReadable = (number) => {
    let result = "";
    let arrTens = [
        "zerro",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let untilTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    if (number < 0) {
        return (result = null);
    }
    if (number < 20) {
        return untilTwenty[number];
    }
    let quantityHundred = Math.floor(number / 100);
    let quantityTens = Math.floor((number % 100) / 10);
    let quantityUnits = (number % 100) % 10;
    if (quantityHundred > 0) {
        result = result + untilTwenty[quantityHundred] + " hundred ";
        // console.log(quantityHundred);
    }
    if (quantityTens >= 2) {
        result = result + `${arrTens[quantityTens]}`;
        // console.log(quantityTens);
        // console.log(quantityUnits);
    
        if (quantityUnits >0) {
        result = result + ` ${untilTwenty[quantityUnits]}`;
        return result;
    }
  };
  
  if (quantityTens < 2) {
    if (quantityTens === 0 & quantityUnits === 0)
    { return result.trim()};
    let helpUntiltwenty = number % 100
    result = result + `${untilTwenty[helpUntiltwenty]}`
    // console.log(helpUntiltwenty)
  }
  return result

}
// console.log(toReadable(120));
// console.log(toReadable(510));
// console.log(toReadable(110));
// console.log(toReadable(999));
// // console.log(toReadable(10));
// console.log(toReadable(1));
