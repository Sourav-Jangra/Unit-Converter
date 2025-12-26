const inputValue= document.getElementById("input-value");
const submitValue= document.getElementById("submitValue");

const feetConverted= document.getElementById("feet-converted");
const metersConverted= document.getElementById("meters-converted");

const gallonsConverted= document.getElementById("gallons-converted");
const litersConverted= document.getElementById("liters-converted");

const poundsConverted= document.getElementById("pounds-converted");
const kilosConverted= document.getElementById("kilos-converted");

submitValue.addEventListener("click", function(){
    let value= Number(inputValue.value);

    let feet= (value * 3.28084).toFixed(3);
    let meters= (value / 3.28084).toFixed(3);
    feetConverted.textContent= feet;
    metersConverted.textContent= meters;

    let gallons= (value * 0.264172).toFixed(3);
    let liters= (value / 0.264172).toFixed(3);
    gallonsConverted.textContent= gallons;
    litersConverted.textContent= liters;

    let pounds= (value * 2.20462).toFixed(3);
    let kilos= (value / 2.20462).toFixed(3);
    poundsConverted.textContent= pounds;
    kilosConverted.textContent= kilos;
    givenValue=document.querySelectorAll(".given-number");
    givenValue.forEach(function(element){
        element.textContent= value;
    });
});