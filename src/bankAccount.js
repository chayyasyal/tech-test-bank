function BankAccount(){
  this.showBalance = 0;
  // this.increaseBalance = 1000;
}

BankAccount.prototype.showBalance = function () {
  return this.balance;
};

// BankAccount.prototype.increaseBalance = function () {
//   return this.balance
// };
