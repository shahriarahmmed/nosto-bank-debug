// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function(){
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = document.getElementById("deposit-field");
  console.log(newDepositAmount.value);
  /* 
    1. get previous deposit total by id

  */
  const previousDepositTotal = document.getElementById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  document.getElementById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = document.getElementById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  document.getElementById("balance-total", newBalanceTotal);
});
