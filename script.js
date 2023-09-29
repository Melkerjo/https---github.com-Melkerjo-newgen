const innerWheel = document.getElementById('innerWheel');
const yearElement = document.getElementById('year');
const diameterElement = document.getElementById('diameter');
const dia = document.getElementById('yearContainer');

let currentYear = 1920;
let currentDiameter = 0;
let width = 100;
let height = 100;

function updateYearAndDiameter() {
    innerWheel.style.transform = 'rotate(0deg)'; // Återställ rotation
    yearElement.textContent = currentYear;
    diameterElement.textContent = "D " + currentDiameter + ' cm';
    dia.style.width = width + "px";
    dia.style.height = height + "px";

    currentYear++;
    currentDiameter += 0.5; // Öka diametern med 1 cm varje år
    width++;
    height++;

    if (currentYear > 2020) {
        currentYear = 1920; // Återställ till 1920 när du når 2021
        currentDiameter = 0; // Återställ diametern när du når 2021
        width = 100;
        height = 100;
    }

    // Skapa en liten fördröjning för rotationen
    setTimeout(() => {
        innerWheel.style.transform = 'rotate(1800deg)'; // Rotera årstalet
    }, 10);
}

setInterval(updateYearAndDiameter, 150); // Uppdatera år och diameter varje sekund
