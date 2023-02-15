// write a program to check whether a year is leap or not?
// A year, occurring once every four years, which has 366 days including 29 February as an intercalary day
//  (2016 is a leap year)
let year=2016;
// (2022 is not a leap year)
// let year=2022;
if(year%4===0){
    console.log(`${year} is a leap year.`);
}
else{
    console.log(`${year} is not a leap year.`);
}