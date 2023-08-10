// Categories | DOM to Variables
let devices = document.querySelectorAll('section.category');

// Phone Makes | DOM to Variables
let phoneMakes = document.querySelectorAll("");

// Mobile Symptoms |
const mobileSymptoms = document.querySelectorAll('section.mobile-symptoms');

// Sectioning of Options
let devicePick, makePick, modelPick, symptomPick, notes;

// Reset
let buttonArray = ['phoneMakes', 'mobileSymptoms']
const reset = () => {
    document.getElementById('msg').innerHTML = '';
}

// Reset Button
const resetButton = document.getElementById('reset');
resetButton.onclick = reset;

// Button Press Interaction
const buttonPress = e => {
    e.target.style.backgroundColor = 'green';
}
const buttonRelease = e => {
    e.target.style.backgroundColor = '';
}



