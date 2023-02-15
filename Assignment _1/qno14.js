// 14. Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

let units = 225;
let unitPrice;
let additonalSurcharge;
let totalBill;


if (units <= 50) {
    unitPrice = 0.50 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;


} else if (units > 50 && units <= 150) {
    unitPrice = 0.75 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;


} else if (units > 150 && units <= 250) {
    unitPrice = 1.20 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;


} else {
    unitPrice = 1.50 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;

}

console.log(`Totalbill= ${totalBill}`);