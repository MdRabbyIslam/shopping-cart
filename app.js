//*first item buttons
const firstItemPlusBtn = document.getElementById("first-item-plus-btn");
const firstItemMinusBtn = document.getElementById("first-item-minus-btn");

//* second item buttons
const secondItemPlusBtn = document.getElementById("second-item-plus-btn");
const secondItemMinusBtn = document.getElementById("second-item-minus-btn");

//* increasing and decreasing buying number of first item

//todo essential functions

//*changing buying item
function ChangingNumberOfBuyingItem(id, incrementOrDecrement) {
  const item = document.getElementById(id);
  let numberOfBuying = parseInt(item.value);
  numberOfBuying = numberOfBuying + incrementOrDecrement;
  item.value = numberOfBuying;
}

//todo first plus and minus button handler

firstItemPlusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", 1);
});

firstItemMinusBtn.addEventListener("click", () => {
  ChangingNumberOfBuyingItem("num-of-buying-first-item", -1);
});

//todo second plus and minus button handler

// secondItemPlusBtn.addEventListener("click", () => {
//   ChangingNumberOfBuyingItem("num-of-buying-second-item", 1);
// });

// secondItemMinusBtn.addEventListener("click", () => {
//   ChangingNumberOfBuyingItem("num-of-buying-second-item", -1);
// });
