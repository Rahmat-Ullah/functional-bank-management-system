function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ('');
    return inputFieldValue;
}

function getElementValueById(elementsId){
    const element = document.getElementById(elementsId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
})