let userName = prompt('What is your name?');
//propmt appears as a pop up with input field for user to type name
alert(userName ? `Hello ${userName}` : 'Hi there!');
// alert appears as a pop up to user. ternary operator ':' gives alternative message if user doesnt input a name
let userQuestion = prompt ('What would you like to ask?');
alert (`${userName}, you asked ${userQuestion}, The Magic 8 Ball says`);
// the data from userName and userQuestion pop up in the alert string



let randomNumber= Math.floor(Math.random()*8);
// random whole integer s=is generated between 0 and 7



if (randomNumber==0)
{
let eightBall = alert('It is certain!');

} else if (randomNumber==1) {
let eightBall= alert('It is decidedly so');

} else if (randomNumber==2) {
let eightBall=alert ('Reply hazy try again');

} else if (randomNumber==3) {
let eightBall=alert ('Cannot predict now');

} else if (randomNumber==4) {
let eightBall =alert ('Do not count on it');

} else if (randomNumber==5) {
    let eightBall=alert ('My sources say no');

} else if (randomNumber==6) {
    let eightBall=alert('Outlook not so good')

} else if (randomNumber==7) {
    let eightBall=alert ('Maybe')

} else {
    let eightBall=alert ('Oops theres an error!');
};
//final else satement will pop up in the case of an error

