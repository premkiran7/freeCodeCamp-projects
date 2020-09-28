const currency = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  let changeRequired = cash - price;
  let change = [...cid];
  let status = "OPEN";

  for (let index = change.length - 1; index >= 0; index--) {
    let curType = change[index][0]; // currency type i.e NICKEL etc
    let cashAvail = change[index][1]; // cash available for currency type

    if (changeRequired < currency[curType]) {
      change.splice(index, 1); // remove change type
    } else if (changeRequired >= 0.0) {
      if (changeRequired < cashAvail) {
        let changeUsed = 0;
        while (changeUsed + currency[curType] <= changeRequired) {
          changeUsed += currency[curType];
        }
        change[index][1] = changeUsed;
        changeRequired = (changeRequired - changeUsed).toFixed(2);
      } else {
        changeRequired = (changeRequired - cashAvail).toFixed(2);
      }
    }
  }

  change.reverse(); // sort change due in highest to lowest order of currency type

  let cashInDrawer = cid.reduce((sum, changeType) => {
    sum += changeType[1];
    return sum;
  }, 0);

  let changeProvided = change.reduce((sum, changeType) => {
    sum += changeType[1];
    return sum;
  }, 0);

  if (cashInDrawer === cash - price) {
    status = "CLOSED";
    change = cid;
  } else if (changeProvided < cash - price) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }

  return {
    status: status,
    change: change,
  };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
