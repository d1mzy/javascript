let raceNumber = Math.floor(Math.random() * 1000);
//random number is allocated between 0 and 1000. Math.floor ensures that its a whole integer
let earlyRunner = true;
//boolean value of true
let runnerAge = 18;

if (runnerAge > 18 && earlyRunner == true)
//adults who's age is equal to 18 need to verify age at desk, hence no '>=' sign included

{let raceNo = raceNumber + 1000;
console.log(`Race No ${raceNo} your race starts at 9:30`);

} else if (runnerAge > 18 && earlyRunner == false)
{let raceNo = raceNumber;
console.log(`Race No ${raceNo} your race starts at 11:30`);

} else if (runnerAge < 18)
{let raceNo = raceNumber;
console.log (`Race No ${raceNo} your race starts at 12:30`);

} else if (runnerAge == 18)
{ console.log (`Please verify your age at the registration desk`);

} else {
console.log(`Oops, looks like you're not on our system`);
};
// final else statement is provided if all other conditions are not met by runner

