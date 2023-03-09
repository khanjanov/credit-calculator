let priceInput = document.querySelector("#price");
let selectMonths = document.querySelector("#select");
let percentageInput = document.querySelector("#percentage");
let calculateBtn = document.querySelector("#calculate");
let clearBtn = document.querySelector("#clear");
let wrapperBottom = document.querySelector(".wrapper__bottom");

//* calculate
calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  wrapperBottom.style = `display : flex; flex-direction : column;`;
  let monthlyPrice =
    (+priceInput.value * ((+percentageInput.value + 100) / 100)) /
    +selectMonths.value;
  let reminder = monthlyPrice % 1;
  monthlyPrice = monthlyPrice - reminder;
  let lastMonthPrice;
  let b = 0;
  for (let i = 0; i < selectMonths.value; i++) {
    b += +reminder.toPrecision(2);
  }
  lastMonthPrice = Math.round(monthlyPrice + b);
  let wrapperBottomTitle = document.createElement("div");
  wrapperBottomTitle.setAttribute("class", "wrapper__bottom__title");
  let wrapperBottomTitleH2 = document.createElement("h2");
  wrapperBottomTitleH2.innerHTML = `Credit Plan`;
  wrapperBottomTitle.append(wrapperBottomTitleH2);
  wrapperBottom.append(wrapperBottomTitle);
  let wrapperBottomCards = document.createElement("div");
  wrapperBottomCards.setAttribute("class", "wrapper__bottom__cards");
  for (let i = 0; i < selectMonths.value; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "wrapper__bottom__cards--card");
    let monthNum = document.createElement("h4");
    let amount = document.createElement("h3");
    let exactDate = document.createElement("h5");

    //* get date
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    if (day < 10) day = "0" + day;

    monthNum.innerHTML = `month ${i + 1}`;
    exactDate.innerHTML = `${(newdate =
      day + "." + (+month + i + 1) + "." + year)}`;
    amount.innerHTML = `${monthlyPrice} AZN`;
    if (i == selectMonths.value - 1) {
      monthNum.innerHTML = `month ${selectMonths.value}`;
      exactDate.innerHTML = `${(newdate =
        day + "." + (+month + i + 1) + "." + year)}`;
      amount.innerHTML = `${lastMonthPrice} AZN`;
    }
    card.append(monthNum, amount, exactDate);
    wrapperBottomCards.append(card);
    wrapperBottom.append(wrapperBottomCards);
  }
});

//* clear
clearBtn.addEventListener("click", () => {
  wrapperBottom.style = `display : none;`;
});
