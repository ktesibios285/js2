import {calculateCircumference, calculateArea, calculateSphereVolume} from "./circleCalculator";
import {convertToNumber} from "./validation";
import {outputToElement} from "./display";
//For onclick button
document.querySelector("#submitButton").addEventListener(
    "click",
    function (e) {
      submitFunction("circumference");
      e.preventDefault();
    },
    false
);
document.querySelector("#submitAreaButton").addEventListener(
    "click",
    function (e) {
      submitFunction("area");
      e.preventDefault();
    },
    false
);
document.querySelector("#submitVolumeButton").addEventListener(
    "click",
    function (e) {
      submitFunction("volume");
      e.preventDefault();
    },
    false
);

function submitFunction(calculationToMake) {
    let outputId = "output", inputId = "radius";
    if (calculationToMake === "area") {
        outputId += "Area";
        inputId += "Area";
    } else if (calculationToMake === "volume") {
        outputId += "Volume";
        inputId += "Volume";
    }
    let userRadius = convertToNumber(document.getElementById(inputId).value);
    if(!userRadius) {
        outputToElement(outputId, "Please enter a valid number.", "red");
    } else {
        if (calculationToMake === "area") {
            outputToElement(outputId, `The area is ${calculateArea(userRadius)}!`);
        }else {
            if (calculationToMake === "area") {
                outputToElement(outputId, `The area is ${calculateArea(userRadius)}!`);
            } else if (calculationToMake === "volume") {
                outputToElement(outputId, `The volume is ${calculateSphereVolume(userRadius)}!`);
            }else {
                outputToElement(outputId, `The circumfrence is ${calculateCircumference(userRadius)}!`);
            }
        }
    }
}
