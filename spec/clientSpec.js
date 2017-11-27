"use strict";

describe("Client", function (){
  var client;

  beforeEach(function (){
    client = new Client();
  })

    it("should let client view bank balance", function (){
      expect(client.viewBalance).toEqual(0);
    });

    it("should let client deposit any sum of money in bank account", function (){
      for(var i = 0; i > 1000; i++)
      expect(client.increaseBalance).toEqual(1000);
    });
});
