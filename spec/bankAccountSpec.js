"use strict";

describe("bankAccount", function(){
  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount("show balance");
  })

  it("should show client's current balance", function(){
    expect(bankAccount.showBalance).toEqual(0);
  });
})
