const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const result = document.getElementById('result');

function calculateTip() {
    const bill = parseFloat(billAmount.value);
    const tip = parseFloat(tipPercentage.value);

    if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
        result.textContent = 'Please enter valid amounts.';
        return;
    }

    const tipAmount = bill * (tip / 100);
    const totalAmount = bill + tipAmount;

    result.textContent = `Tip Amount: $${tipAmount.toFixed(2)} \nTotal Amount: $${totalAmount.toFixed(2)}`;
}
