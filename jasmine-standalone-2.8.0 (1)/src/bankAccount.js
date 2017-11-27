function BankAccount(){
  this.showBalance = 0;
}

BankAccount.prototype.showBalance = function () {
  return this.balance;
};
