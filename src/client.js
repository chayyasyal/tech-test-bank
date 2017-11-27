"use strict";

function Client(){
  this.viewBalance = 0;
  this.getIncreaseBalance = 1000;
};

Client.prototype.viewBalance = function (){
  return this.balance = 0;
};

Client.prototype.increaseBalance = function (){
  return this.getIncreaseBalance +=1;
};
