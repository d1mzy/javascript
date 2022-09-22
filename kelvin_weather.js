const kelvin = 293
//Const variable chosen as Kelvin variable should always stay constant for string interpolation to work
console.log(kelvin);

console.log (kelvin-273);
const celsius= kelvin-273;
// celsius will always be whatever value kelvin is subtracted by 273

const farenheight= (celsius * (9/5)+32);
//farenheight will always be celsius * ((9/5)+32)
let newFarenheight = Math.floor(farenheight);
// let variable means newFarenheight can be reassigned a different value
//.Math.floor allows the newFarenheight to be rounded to a wwhole number when outputed
console.log (`The temperature is ${newFarenheight} degrees Farenheight.`);
console.log (newFarenheight);

//0 Kelvin = -460 degrees farenheight
