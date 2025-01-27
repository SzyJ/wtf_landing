const DEFAULT_TEXT = 'quick links'
const PRINT_SPEED = 25;
var printInd = 0;

var textToPrint = '';

function resetTooltip() {
    document.getElementById("tooltip").innerHTML = DEFAULT_TEXT;
    document.getElementById("tooltip").style.color = 'lightgray';
    printInd = 0;
    textToPrint = '';
}

function setTooltipText(newText) {
    document.getElementById("tooltip").style.color = '#444444';
    document.getElementById("tooltip").innerHTML = '';
    textToPrint = newText;
    printTooltip();
}

function printTooltip() {
    if (printInd < textToPrint.length) {
        document.getElementById("tooltip").innerHTML += textToPrint.charAt(printInd);
        printInd++;
        setTimeout(printTooltip, PRINT_SPEED);
    } else {
        textToPrint = '';
        printInd = 0;
    }
}