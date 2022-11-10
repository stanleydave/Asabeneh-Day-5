// EXERCISE 1
let array = Array ();
let num = [5, 6, 7, 3, 2, 9,];
console.log(num.length);
console.log(num[0]);
console.log(num[num.length - 1]);
console.log(num[3]);

let mixedDataTypes = ["string", 2, null, undefined, true, 8];
console.log(mixedDataTypes.length);

let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  console.log(itCompanies);
  console.log(itCompanies[0]);
  console.log(itCompanies[3]);
  console.log(itCompanies[itCompanies.length - 1]);

  for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
  }
  for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
  }
  console.log(itCompanies.toString());
  
  // let companyCheck = prompt("enter company:");
  // if (itCompanies.includes(companyCheck)) {
  //   alert(companyCheck);
  // } else {
  //   alert("company is not found");
  // }
  let container = [];
  for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].includes("oo") === true) {
      container.push(itCompanies[i]);
    }
  }
  console.log(container);
  console.log(itCompanies.sort());
  console.log(itCompanies.reverse());
  console.log(itCompanies.slice(0, 3));
  console.log(itCompanies.slice(itCompanies.length - 3));
  console.log(itCompanies.slice(4, 5));
  console.log(itCompanies.shift());
  console.log(itCompanies);
  console.log(itCompanies.splice(3, 1));
  console.log(itCompanies);
  console.log(itCompanies.pop());
  console.log(itCompanies);
  console.log(itCompanies.splice(0));
  console.log(itCompanies);

// EXERCISE 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// EXERCISE 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let ageSort = ages.sort((a, b) => {
  return a - b;
});
let length = ageSort.length;
console.log(ages.length);
console.log(ageSort);
if (length % 2 === 1) {
  console.log(ages[Math.floor(length / 2)]);
} else {
  console.log((ageSort[length / 2] + ageSort[length / 2 - 1]) / 2);
}

let ageSum = 0;
for (let i = 0; i < ageSort.length; i++) {
  ageSum += ageSort[i];
}
console.log(ageSum);
let ageAvg = ageSum / ageSort.length;
console.log(ageAvg);

let range = Math.max(...ageSort) - Math.min(...ageSort);
console.log(range);

import { countries } from "./countries.js";
import { webTechs } from "./webtechs";
console.log(countries);
console.log(webTechs);