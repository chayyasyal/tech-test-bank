"use strict";

describe("bankAccount", function(){
  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount();
  });

  it("should show client's current balance", function(){
    expect(bankAccount.showBalance).toEqual(0);
  });
})
