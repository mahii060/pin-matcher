function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}
function getPin() {
    const pin = generatePin();
    const pinString = pin.toString();
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return generatePin();
    }
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = getPin();
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const typedNumbersField = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    const previousNumber = typedNumbersField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbersField.value = '';
        }
        else if (number === '<') {
            const digit = previousNumber.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            typedNumbersField.value = remainingDigits;
        }
    }
    else {
        const currentNumber = previousNumber + number;
        typedNumbersField.value = currentNumber;
    }
})
document.getElementById('submit-button').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;
    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value;
    const successMessage = document.getElementById('success-message');
    const failureMessage = document.getElementById('failure-message');
    if (displayPin === typedNumbers) {
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';

    }
    else {
        failureMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})