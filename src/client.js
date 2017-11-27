"use strict";
function Client(){
  this.viewBalance = 0;
  // this.increaseBalance = 1000;
}

Client.prototype.viewBalance = function () {
  return this.balance;
};


// Client.prototype.increaseBalance = function () {
//   return this.balance;
// };
