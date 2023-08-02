// Categories | DOM to Variables
const deviceArray = ['smart-phone', 'tablet', 'game-console', 'computer'];
let devices = [];
deviceArray.forEach(function(dev){
    devices.push(document.getElementById(dev));
})

// Phone Makes | DOM to Variables
const phoneMakeArray = ['iphone', 'samsung', 'google', 'lg', 'motorola', 'oneplus']
let phoneMakes = [];
phoneMakeArray.forEach(function(phoneMake) {
    phoneMakes.push(document.getElementById(phoneMake));
});

// Sectioning of Options
let devicePick, makePick, modelPick, notes;


// Reset
const reset = () => {
    devicePick, makePick, modelPick, notes = '';
    devices.forEach(item => item.style.display = 'inline-block');
    phoneMakes.forEach(item => item.style.display = 'none');
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


// Sets device type based on user input
devices.forEach(function(dev) {
    dev.addEventListener('mousedown', function(pick){
        buttonPress(pick);
        devicePick = pick.target.innerHTML;
    });
    dev.addEventListener('mouseup', function(pick){
        buttonRelease(pick);
        devices.forEach((item) => {
            item.style.display = 'none';
        })
        if (devicePick.toLowerCase() === 'smart-phone') {
            phoneMakes.forEach(item => item.style.display = 'inline-block');
        }
    });
})

// Sets Smart-Phone Make based on user input
phoneMakes.forEach(function(make){
    make.addEventListener('mousedown', function(pick){
        buttonPress(pick);
        makePick = pick.target.innerHTML;
    });
    make.addEventListener('mouseup', function(pick){
        buttonRelease(pick);
        notes = devicePick + ' ' + makePick;
        document.getElementById('msg').innerHTML = notes;
    })
})

// TypeWriter Sequencing

reset();




