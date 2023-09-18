let counterValue = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", function () {
    counterValue++;
    updateCounterDisplay();
});

decrementButton.addEventListener("click", function () {
    counterValue--;
    updateCounterDisplay();
});

resetButton.addEventListener("click", function () {
    counterValue = 0;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}