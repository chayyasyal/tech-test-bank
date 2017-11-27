"use strict";

describe("Client", function(){
  var client;

  beforeEach(function(){
    client = new Client();
  });

  it("should let client view bank balance", function (){
    expect(client.viewBalance).toEqual(0);
  });

  // it("should let client deposit any sum of money in bank account", function (){
  //   expect(client.increaseBalance).toEqual(1000);
  // });

  //client must be able to deposit money, withdraw money and
  //print statement showing current balance
});
