var N = Number(prompt("Please write N (N>0, N<20)"));
var Pyramid = "";
var NumberOfParts = 1;

if (N < 1 || N > 20 || !Number.isInteger(N)) {
    console.log("Incorrect!");
} else {
    for (var i = 1; i <= N; i++) {

        for (var j = N - i; j > 0; j--) {
            Pyramid += "    ";
        }


        for (var j = NumberOfParts; j > 0; j--) {
            Pyramid += " [~]";
        }

        NumberOfParts += 2;
        Pyramid += "\n";
    }

    console.log(Pyramid);
}
