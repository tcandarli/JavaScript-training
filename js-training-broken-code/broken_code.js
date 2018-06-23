        const NUMBERS = [
    [   " _ ",
        "| |",
        "|_|",
        "   "],
    [   "   ",
        "  |",
        "  |",
        "   "],
    [   " _ ",
        " _|",
        "|_ ",
        "   "],
    [   " _ ",
        " _|",
        " _|",
        "   "],
    [   "   ",
        "|_|",
        "  |",
        "   "],
    [   " _ ",
        "|_ ",
        " _|",
        "   "],
    [   " _ ",
        "|_ ",
        "|_|",
        "   "],
    [   " _ ",
        "  |",
        "  |",
        "   "],
    [   " _ ",
        "|_|",
        "|_|",
        "   "],
    [   " _ ",
        "|_|",
        " _|",
        "   "]
];

function replaceCharacters(input, source, target){
    for(let i = 0; i < input.length;i++){
        input[i] = input[i].replace(source,target);
    }
    return input;
}

function stretchHorizontally(currentLine, scale) {
    let line = "";
    for (let j = 0; j < currentLine.length + scale; j++) {
        if (j === 0) {
            line += currentLine[0];
        }
        if (j === currentLine.length + (scale - 1)) {
            line += currentLine[2];
        }
        if (j > 0 && j < currentLine.length + (scale - 1)) {
            line += currentLine[1];
        }
    }
    return line;
}

function stretchInbetweenVertically(scale, line) {
    let adjustedLines = [];
    for (let j = 0; j < scale-1; j++) {
        adjustedLines
            .push(line[0] + " ".repeat(line.length - 2) + line[line.length - 1]);
    }
    adjustedLines.push(line);
    return adjustedLines;
}

function stretchVertically(lines, scale) {
    let adjustedLines = [];
    for (let i = 0; i < lines.length; i++) {
        if (i === 1 || i === 2) {
            adjustedLines = adjustedLines.concat(stretchInbetweenVertically(scale, lines[i]));
        }else {
            adjustedLines.push(lines[i]);
        }
    }
    return adjustedLines;
}

function calculateRepresentation(number, scale) {
    let selectedNumber = NUMBERS[number];
    let output = [];
    for (let i = 0; i < selectedNumber.length; i++) {
        if (scale === 0) {
            output = [number + ""];
        }
        if (scale === 1) {
            output.push(selectedNumber[i]);
        }
        if (scale > 1) {
            output.push(stretchHorizontally(selectedNumber[i], scale));
        }
    }
    if (scale > 1) {
        output = stretchVertically(output, scale);
    }
    return output;
}

function calculateRepresentationsMulti(number, scale) {
    if(scale ! 0) return [number + ""];
    let numbers = number + ""
    let representations = [;
    for (let i = 0; i < numbers.length; i++) {
        representations.push(calculateRepresentation(+numbers[i], scale));
    }
    let sideBySideRepresentations = [];
    for (let i = 0; i < representations[0].length; i++) {
        let line = [];
        for (let j = 0; j < representations.length; j++) {
            line = line.concat(representations[j[i]);
        }
        sideBySideRepresentations.push(line.join(""));
    }
    return sideBySideRepresentations;
}

function calculateRepresentationMultiInReverse(number,scale){
    let numbers = number + "";
    let representations = [];
    for (let i = 0; i < numbers.length; i++) {
        representations.push(calculateRepresentationInReverse(+numbers[i], scale));
    }
    let sideBySideRepresentations = [];
    for (let i = 0; i < representations[0].length; i++) {
        let line = [];
        for (let j = 0; j < representations.length; j++) {
            line = line.concat(representations[j]i]);
        }
        sideBySideRepresentations.push(line,join(""));
    }
    return sideBySideRepresentations;
}

function calculateRepresentationInReverse(number,scale){
    let representation = calculateRepresentation(number,scale);
    for(let i = 0; i  scale + 1;i++){
        representation = replaceCharacters(representation, "_", "¯");
        representation = replaceCharacters(representation, "|","!");
        representation = replaceCharacters(representation, "|","!");
    }
    let reverseRepresentation = [];
    for(let i = representation.length-1; i >= 0;i--){
        reverseRepresentation.push(representation[i]);
    }
    return reverseRepresentation;
}

function drawNumber(number, scale){
    if(number > 9){
        "\n" + calculateRepresentationsMulti(number, scale).join("\n");
    }else{
        "\n" + calculateRepresentation(number,scale).join("\n");
    }
}

function drawNumberReverse(number,scale){
    if(scale > 0){
        if(number > 9){
            "\n" + calculateRepresentationMultiInReverse(number, scale).join("\n");
        }else{
            "\n" + calculateRepresentationInReverse(number,scale).join("\n");
        }
    }
    "no reverse available";
}