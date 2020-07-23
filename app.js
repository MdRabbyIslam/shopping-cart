//*first item buttons
const firstItemPlusBtn = document.getElementById("first-item-plus-btn");
const firstItemMinusBtn = document.getElementById("first-item-minus-btn");

//* second item buttons
const secondItemPlusBtn = document.getElementById("second-item-plus-btn");
const secondItemMinusBtn = document.getElementById("second-item-minus-btn");

//* increasing and decreasing buying number of first item

//todo essential functions

//* function of increament items number
function incrementingValue(number, incrementValue) {
  let numContainer = number;
  numContainer += incrementValue;
  return numContainer;
}

//*function of discrement items number
function discrementingValue(number, discrimentValue) {
  let numContainer = number;
  if (numContainer > 0) numContainer -= discrimentValue;
  else numContainer = 0;
  return numContainer;
}

//*function of changing number of buying item
function ChangingNumberOfBuyingItem(id, incrementOrDecrement) {
  const item = document.getElementById(id);
  const numberOfBuying = parseInt(item.value);
  const incrementOrDecrementValue = incrementOrDecrement(numberOfBuying, 1);
  item.value = incrementOrDecrementValue;
}

//* function of changing item price
function changingItemPrice(id, incrementOrDecrement, price) {
  const priceContainer = document.getElementById(id);
  const pricecValue = parseInt(priceContainer.innerHTML);
  const incresedAmount = incrementOrDecrement(pricecValue, price);
  priceContainer.innerHTML = incresedAmount;
}

//todo first plus and minus button handler

firstItemPlusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", incrementingValue);
  changingItemPrice("first-item-price", incrementingValue, 1219);
});

firstItemMinusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", discrementingValue);
  changingItemPrice("first-item-price", discrementingValue, 1219);
});

//todo second plus and minus button handler

secondItemPlusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-second-item", incrementingValue);
  changingItemPrice("second-item-price", incrementingValue, 59);
});

secondItemMinusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-second-item", discrementingValue);
  changingItemPrice("second-item-price", discrementingValue, 59);
});
