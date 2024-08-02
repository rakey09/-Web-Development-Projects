const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const result = document.getElementById('result');

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = 'Please enter valid values.';
        return;
    }

    const bmi = weight / (height * height);
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
}
