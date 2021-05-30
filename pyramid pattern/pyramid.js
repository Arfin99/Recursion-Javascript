let totalNumber = window.prompt("Enter the total Rows of Pyramid");
let stringPattern = "";

function printSpace(space) {
    if (space == 0) {
        return;

    }

    stringPattern += "&nbsp ";
    printSpace(space - 1);
}

function printStar(star) {
    if (star == 0) {
        return;

    }

    stringPattern += "*";
    printStar(star - 1);

}

function pyramidPattern(lineNumber, number) {
    if (lineNumber == 0) {
        return;
    }

    printSpace(lineNumber - 1);
    printStar(2 * (number - lineNumber) + 1);
    stringPattern += "<br>";
    pyramidPattern(lineNumber - 1, number);

}

pyramidPattern(totalNumber, totalNumber);

document.write(stringPattern);