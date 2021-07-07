let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
    count++;
    checkLimit();
    updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
    count--;
    checkLimit();
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
};


// Added function to check number limit
function checkLimit() {
    if (count == 0) {
        counterMinusElem.disabled = true;
    } else if (count == 50) {
        counterPlusElem.disabled = true;
    } else {
        counterMinusElem.disabled = false;
        counterPlusElem.disabled = false;
    }
}