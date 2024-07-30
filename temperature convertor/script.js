function convertTemperature() {
    const tempInput = document.getElementById('temp').value;
    const resultDiv = document.getElementById('result');
    const unit = document.querySelector('input[name="unit"]:checked').value;

    if (tempInput === '') {
        resultDiv.innerHTML = 'Please enter a temperature.';
        return;
    }

    let result;

    if (unit === 'celsius') {
        // Convert Celsius to Fahrenheit
        result = (tempInput * 9/5) + 32;
        resultDiv.innerHTML = `${tempInput}°C is equal to ${result.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        result = (tempInput - 32) * 5/9;
        resultDiv.innerHTML = `${tempInput}°F is equal to ${result.toFixed(2)}°C`;
    }
}
