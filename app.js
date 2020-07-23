//*first item buttons
const firstItemPlusBtn = document.getElementById("first-item-plus-btn");
const firstItemMinusBtn = document.getElementById("first-item-minus-btn");

//* second item buttons
const secondItemPlusBtn = document.getElementById("second-item-plus-btn");
const secondItemMinusBtn = document.getElementById("second-item-minus-btn");

//* increasing and decreasing buying number of first item

//todo essential functions

//* function of increament
function incrementingValue(number) {
  let numContainer = number;
  numContainer++;
  return numContainer;
}

//*function of discrement
function discrementingValue(number) {
  let numContainer = number;
  if (numContainer > 0) numContainer--;
  else numContainer = 0;
  return numContainer;
}

//*function of changing number of buying item
function ChangingNumberOfBuyingItem(id, incrementOrDecrement) {
  const item = document.getElementById(id);
  const numberOfBuying = parseInt(item.value);
  const incrementOrDecrementValue = incrementOrDecrement(numberOfBuying);
  item.value = incrementOrDecrementValue;
}

/*
function changingItemStringtoNumber(id) {
  const item = document.getElementById(id);
  const itemValuetoNumber = parseInt(item.value);
  return [itemValuetoNumber, item];
}
console.log(changingItemStringtoNumber("num-of-buying-first-item"));
*/

//todo first plus and minus button handler

firstItemPlusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", incrementingValue);
});

firstItemMinusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", discrementingValue);
});

//todo second plus and minus button handler

secondItemPlusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-second-item", incrementingValue);
});

secondItemMinusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-second-item", discrementingValue);
});
