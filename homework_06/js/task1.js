var side1 = Number(prompt("Input first side "));
var side2 = Number(prompt("Input second side "));
var side3 = Number(prompt("Input third side "));
var gip = Math.max(side1, side2, side3);
var kat1, kat2;
var p, type, square;

if (gip == side1) {
    kat1 = side2;
    kat2 = side3;
} else if (gip == side2) {
    kat1 = side1;
    kat2 = side3;
} else if (gip == side3) {
    kat1 = side1;
    kat2 = side2;
}

p = (side1 + side2 + side3) / 2;
square = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));


if (side1 > 0 && side2 > 0 && side3 > 0 && !Number.isNaN(square) && square != 0) {

    if (gip == Math.sqrt(kat1 * kat1 + kat2 * kat2)) {
        type = "right";
    } else if (side1 == side2 && side2 == side3) {
        type = "equilateral";
    } else if (side1 == side2 || side2 == side1 || side3 == side2) {
        type = "isosceles";
    } else {
        type = "scalene";
    }
    console.log("Type of triangle is " + type + " triangle and square is " + (parseInt(square * 100) / 100));
} else {
    console.log("Incorrect data")
}
