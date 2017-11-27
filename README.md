## Tech Test 1: Bank
First practice tech test of week 10: Bank. To create a programme using Ruby or JavaScript that allows a customer to deposit and withdraw money from their account and print their bank statement to show current balance.
Time limit: 1030 - 1700

## About task
This is the first practice session of this week with an emphasis on producing the best code I can by myself when there is a minimal time pressure.
In this test I will practice OO design and TDD skills. At the end of the day I will also review my own code and reflect on the work I have done. I will share my thoughts in this document.

## Technologies used
1. JavaScript
2. Jasmine; testing framework
3. HTML
4. CSS 
5. TDD methodology
6. Diagramming

## Tech Test Requirements
To interact with code via a REPL like IRB or the JavaScript console. (There is no need to implement a command line interface that takes input from STDIN.) Deposits, withdrawal. Account statement (date, amount, balance) printing. Data can be kept in memory (it doesn't need to be stored to a database or anything). Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see

````
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
````

## About Code in Bank
I started off by creating two separate variables called Client and bankAccount. The reason for this was initially based on what I had diagrammed and splitting how each variable functions individually before seeing where the two would have intersections. I imagined how a person interacts with banking services and with that in mind, diagrammed the process and then proceeded to apply to it to my code. 
As a variable, client was one-to-many, because it involved behaviours such as viewing bank account, depositing any sum of money into bank account and withdrawing any sum of money from said bank account.
On the other hand, bankAccount for now, contains the methods 'showBalance' and 'increaseBalance' to reflect client interactions with their bank account.

## Running tests
In order to see how Bank currently works, simply clone this repo and run SpecRunner.html in your terminal (or index.html to see what Bank currently looks like). The latter is an area I would have definitely liked to have improved and worked on if I had had more time. 

## Day 1 Test Reflections
I feel like the day got off to a good start as I managed to install the environment and my testing framework with confidence. 
My first two spec tests were passing in both bankAccount and client files, but, I felt a bit cynical that they both passed quite quickly. So I created errors to test what I'd done and to see if I had forgotten anything - all that green just felt too good to be true - but in the end I decided to commit any passing, green tests.
The lesson I have learnt from this tech test today is to have more faith in myself, the knowledge and skills gained over the last 10 weeks and in the code that I write.
As I went through the day, I ran into errors which put a stop to the influx of green tests. The error messages I mainly saw were: reference errors, type errors and having undefined variables. I resolved these by using a console log in my code and in browser, fully reading the stack trace, Googling my error messages and test driving any changes I'd made to my code. 
My errors turned out to be a mix of syntax and simply not referring to variables I had created.

## Further Features
I would have definitely liked to have added more details and features to my programme. These include:
1. Adding a timestamp to transactions made
2. More HTML and CSS styling to the page itself
3. Have the £1000 deposit show up on the webpage when the 'view balance' button is clicked
4. To have had more faith in my code; I could have achieved more if I had full confidence in what I was creating today
5. Making the buttons work and display whatever amout of money was currently in the client's bank account

## Conclusion
Overall, I felt that today was quite successful and I enjoyed the tech test. I chose to create Bank in JavaScript because it is one of my favourite computer languages and I am starting to feel more confident and generally at ease with it. 
I am pleased with what I have created - it is a far cry from what I have been able to do/create since I started at Makers - and I acknowledge the growth I have made tech-wise.\
I am also pleased with my patience, my methodology, the persistent nature of debugging (even if the fourth test passed at 86%), my diagramming skills, knowing exactly what I was typing into my code and taking the time to meticulously understand error messages before resolving them.



