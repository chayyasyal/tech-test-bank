## Tech Test 1: Bank
First practice tech test of week 10: Bank. To create a programme using Ruby or JavaScript that allows a customer to deposit and withdraw money from their account and print their bank statement to show current balance.
Time limit: 1030 - 1700

## About task
This is the first practice session of this week with an emphasis on producing the best code I can by myself when there is a minimal time pressure.
In this test I will practice OO design and TDD skills. At the end of the day I will also review my own code and reflect on the work I have done. I will share my thoughts in this document.

## Technologies used
1. JavaScript
2. Jasmine; testing framework

## Requirements
To interact with code via a REPL like IRB or the JavaScript console. (There is no need to implement a command line interface that takes input from STDIN.) Deposits, withdrawal. Account statement (date, amount, balance) printing. Data can be kept in memory (it doesn't need to be stored to a database or anything). Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see

````
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
````

## Day 1 Test Reflections
