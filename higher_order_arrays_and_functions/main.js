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

const testMap2 = companies.map(company => 2);

const testMap3 = companies.map( company => 3);

console.log(companyNames);
//These practice exercises came from this video: https://www.youtube.com/watch?v=rRgD1yVwIvE