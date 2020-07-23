//*first item buttons
const firstItemPlusBtn = document.getElementById("first-item-plus-btn");
const firstItemMinusBtn = document.getElementById("first-item-minus-btn");

//* second item buttons
const secondItemPlusBtn = document.getElementById("second-item-plus-btn");
const secondItemMinusBtn = document.getElementById("second-item-minus-btn");

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
  return priceContainer.innerHTML;
}

//*function of adding total amount

function totalAmount(id, input, incrementOrDecrement) {
  const subtotalContainer = document.getElementById(id);
  const subtotalValue = parseInt(subtotalContainer.innerText);
  console.log("subtotalvalue", subtotalValue, typeof subtotalValue);
  const subtotal = incrementOrDecrement(subtotalValue, input);
  subtotalContainer.innerHTML = subtotal;
}

//todo first plus and minus button handling

//*first plus button handeling
firstItemPlusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", incrementingValue);
  changingItemPrice("first-item-price", incrementingValue, 1219);
  totalAmount("sub-total-price", 1219, incrementingValue);
});

//* first minus button handeling
firstItemMinusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", discrementingValue);
  changingItemPrice("first-item-price", discrementingValue, 1219);
  totalAmount("sub-total-price", 1219, discrementingValue);
});

//todo second plus and minus button handler

//* second plus button handleing
secondItemPlusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-second-item", incrementingValue);
  changingItemPrice("second-item-price", incrementingValue, 59);
  totalAmount("sub-total-price", 59, incrementingValue);
});

//* second minus button handeling
secondItemMinusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-second-item", discrementingValue);
  changingItemPrice("second-item-price", discrementingValue, 59);
  totalAmount("sub-total-price", 59, discrementingValue);
});
