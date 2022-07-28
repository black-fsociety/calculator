const btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset-btn');
const deleteBtn = document.querySelector('.del-btn');
const equalBtn = document.querySelector('.equal-btn');
const screen = document.querySelector('.input-field');

screen.textContent = '';

// display on screen
function displayOnScreen() {
    if (this.textContent === 'Del' || this.textContent === '=' || this.textContent === 'Reset') {
        screen.textContent += '';
    } else {
        screen.textContent += this.textContent;
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', displayOnScreen);
})


// Delete Button Function
function deleteLastItem() {
    if (screen.textContent) {
        screen.textContent = screen.textContent.slice(0, -1);
    } else {
        console.log('Empty');
    }
}

deleteBtn.addEventListener('click', deleteLastItem);


// Reset Button Function
function resetCalculator() {
    screen.textContent = '';
}

resetBtn.addEventListener('click', resetCalculator);


// Equal Button Function
function performCalculation() {
    let equation = screen.textContent;
    let result;
    if (equation[0] === '/' || equation[0] === 'x') {
        console.log(`Error! Equation can\'t start with ${equation[0]}`)
        resetCalculator();
    } else {
        let equationList = equation.split('');
        for (let i = 0; i < equationList.length; i++) {
            if (equationList[i] === 'x') {
                if (equationList[i] === equationList[i + 1]) {
                    console.log('Invalid Syntax!');
                    break;
                } else {
                    equationList[i] = '*';
                }
            }
        }

        try {
            result = eval(equationList.join(''));
        } catch(e) {
            console.log(e);
        }

        screen.textContent = result;
    }
}

equalBtn.addEventListener('click', function() {
    if (!screen.textContent) {
        console.log('Empty!');
    } else {
        performCalculation();
    }
})