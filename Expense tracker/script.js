let expenses = [];

function addExpense() {
    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && !isNaN(amount) && amount > 0) {
        const expense = {
            description: description,
            amount: amount
        };
        expenses.push(expense);
        updateExpenses();
        clearInputs();
    } else {
        alert('Please enter a valid description and amount.');
    }
}

function updateExpenses() {
    const expenseList = document.getElementById('expenseList');
    const totalAmount = document.getElementById('totalAmount');

    expenseList.innerHTML = '';
    let total = 0;

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${expense.description}</span><span>$${expense.amount.toFixed(2)}</span>`;
        expenseList.appendChild(li);
        total += expense.amount;
    });

    totalAmount.innerText = total.toFixed(2);
}

function clearInputs() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
