"use strict";
bankAccount = new BankAccount();

function updateTextFields() {
  ("#show-balance").text(bankAccount.showBalance);
  ("#deposit-money").text(bankAccount.increaseBalance);
}

("#deposit-money").click(function (){
  bankAccount.increaseBalance();
  updateTextFields();


})
