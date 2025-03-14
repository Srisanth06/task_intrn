document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('convertBtn').addEventListener('click', convertTemperature);
});

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperature)) {
        resultDiv.textContent = '❌ Please enter a valid number.';
        resultDiv.style.color = 'red';
        return;
    }

    let convertedTemp = 0;
    let convertedUnit = '';
    let resultText = '';

    if (unit === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = '°F';
        resultText = `${temperature}°C = ${convertedTemp.toFixed(2)}${convertedUnit}`;
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = '°C';
        resultText = `${temperature}°F = ${convertedTemp.toFixed(2)}${convertedUnit}`;
    } else if (unit === 'kelvin') {
        convertedTemp = temperature - 273.15;
        convertedUnit = '°C';
        resultText = `${temperature}K = ${convertedTemp.toFixed(2)}${convertedUnit}`;
    }

    resultDiv.textContent = resultText;
    resultDiv.style.color = '#333';

    // Add a simple fade-in animation
    resultDiv.style.opacity = '0';
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        resultDiv.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
}
