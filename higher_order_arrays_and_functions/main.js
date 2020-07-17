const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*

 //  The good old for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//  The forEach loop
companies.forEach(function (company){
  console.log(company.name);
});
*/

//filter with for loop to find all those who are 21 or older
//let canDrink = [];
// for(let i = 0; i < ages.length; i++)
// {
//   if(ages[i] >= 21)
//   {
//     canDrink.push(ages[i]);
//   }
// } 

//filter again with javascript array filter function
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

//filter with arrow function. So elegant!
//const canDrink = ages.filter(age => age >=21);


//console.log(canDrink);


//Filter the retail companies with javascript filter function
// const retailCompanies = companies.filter(function(company){
//   if(company.category === 'Retail'){
//     return true;
//   }
// });

//same filtering of retail companies but this time with the arrow function
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

//Get all companies founded in the 80's
//const eightiesCompanies = companies.filter((company) => (company.start >= 1980 && company.start <= 1989));
//console.log(eightiesCompanies)

//Filter all companies that lasted at least 10 years
// const tenYearCompanies = companies.filter(company => (company.end - company.start >= 10));
// console.log(tenYearCompanies);

//map
//create array of company names, old fashioned way without arrow functions
// const companyNames = companies.map(function(company){
//   return company.name;
// });

//create an array of company names using arrow functions
const companyNames = companies.map(company => company.name);

//testMap to play with what else can be done
const testMap = companies.map(company => 1);

//testMap2 uses template literals to print out the company name with its start and end dates
const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

//created a map with the square root of all the ages of the companies
const agesSqaureRoot = ages.map(age => Math.sqrt(age));

//to do two operations just do two maps as in .map().map();
const agesSquareRootThenTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

//console.log(agesSquareRootThenTimesTwo);


//using javascript sort function to create a new array of companies that are sorted by smallest age to largest age
// const sortedCompanies = companies.sort(function (company1, company2) {
//   if (company1.start > company2.start) {
//     return 1;
//   }
//   else{
//     return -1;
//   }
// })

//same example but using javascript arrow functions to condense code.
//this method turned out to have more complicated steps because it required the use of ternary operators. 
//Syntax explanation: condition ? exprIfTrue : exprIfFalse
// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

//now sort ages
// const sortAges = ages.sort();
//this doesn't work because it only sorts the first digit

//corrected version of sort Ages using method from prior example 
// a-b implies sorting by ascending order. could also do b-a to sort by descending order.
// const sortAges = companies.sort((a,b) => a - b);

// console.log(sortAges);




//These practice exercises came from this video: https://www.youtube.com/watch?v=rRgD1yVwIvE