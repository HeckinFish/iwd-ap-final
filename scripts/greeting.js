var greeting = 'Welcome ';
var subject = 'Traveler. ';
var messageOne = 'There is something I must know';
var messageTwo = '...';

var welcomeOne = greeting + subject;
var welcomeTwo = messageOne;
var welcomeThree = messageTwo;

var elOne = document.getElementById('greetingOne');
elOne.textContent = welcomeOne;

var elTwo = document.getElementById('greetingTwo');
elTwo.textContent = welcomeTwo;

var elThree = document.getElementById('greetingThree');
elThree.textContent = welcomeThree;

