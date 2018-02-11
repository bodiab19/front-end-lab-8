var eu = prompt("Input amount of EURO");
var us = prompt("Input amount of USD");
var grnToUs;
var grnToEu;
var euToUs;

var kyrsEu = 33.1;
var kyrsUs = 27.0;


if (eu >= 0 && us >= 0) {
    grnToEu = eu * kyrsEu;
    grnToUs = us * kyrsUs;
    euToUs = kyrsEu / kyrsUs;
    console.log(eu + " euros are equal " + grnToEu.toFixed(2) + " UAH, " + us + " dollars are equal " + grnToUs.toFixed(2) + " UAH, one euro is equal " + euToUs.toFixed(2) + " dollars.");
} else {
    console.log("Incorrect data");
}
