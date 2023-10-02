// Function to generate a 4-digit random PIN
function generatePin() {
    const randomNumber = Math.round(Math.random() * 9000) + 1000; // Generate a random 4-digit number
    return randomNumber;
}

// Function to get a valid 4-digit PIN
function getPin() {
    const pin = generatePin(); // Generate a random PIN
    const pinString = pin.toString(); // Convert the PIN to a string
    if (pinString.length === 4) {
        return pin; // Return the 4-digit PIN
    } else {
        return getPin(); // Recursively generate a new PIN if not 4 digits
    }
}

// Event listener for generating and displaying a PIN
document.getElementById('generate-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = getPin(); // Set the generated PIN in the display field
});

// Event listener for calculator buttons
document.getElementById('calculator').addEventListener('click', function (event) {
    const typedNumbersField = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    const previousNumber = typedNumbersField.value;

    // Check if the clicked button represents a numeric value
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbersField.value = ''; // Clear the input field
        } else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop(); // Remove the last digit
            const remainingDigits = digits.join('');
            typedNumbersField.value = remainingDigits; // Update the input field
        }
    } else {
        const currentNumber = previousNumber + number;
        typedNumbersField.value = currentNumber; // Append the clicked number to the input
    }
});

// Event listener for submitting and checking the PIN
document.getElementById('submit-button').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;
    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value;
    const successMessage = document.getElementById('success-message');
    const failureMessage = document.getElementById('failure-message');

    // Compare the displayed PIN with the typed PIN
    if (displayPin === typedNumbers) {
        successMessage.style.display = 'block'; // Display success message
        failureMessage.style.display = 'none';
    } else {
        failureMessage.style.display = 'block'; // Display failure message
        successMessage.style.display = 'none';
    }
});
