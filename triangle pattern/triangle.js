let totalNumber = window.prompt("Input the Rows for Triangle");
let stringPattern = "";

function printStar(star) {
    if (star == 0) {
        return;
    }

    stringPattern += "* ";

    printStar(star - 1);
}


function trianglePattern(totalLine, totalStar) {
    if (totalLine == 0) {
        return;
    }

    printStar(totalStar);
    stringPattern += "<br>";


    trianglePattern(totalLine - 1, totalStar + 1);

}

trianglePattern(totalNumber, 1);
document.write(stringPattern);


