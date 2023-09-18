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



// ストップウォッチ
        let stopwatchTimer;
        let hoursValue = 0;
        let minutesValue = 0;
        let secondsValue = 0;

        const updateStopwatch = () => {
            document.getElementById('hoursDisplay').textContent = String(hoursValue).padStart(2, '0');
            document.getElementById('minutesDisplay').textContent = String(minutesValue).padStart(2, '0');
            document.getElementById('secondsDisplay').textContent = String(secondsValue).padStart(2, '0');
        };

        document.getElementById('startButton').addEventListener('click', () => {
            stopwatchTimer = setInterval(() => {
                secondsValue++;
                if (secondsValue === 60) {
                    secondsValue = 0;
                    minutesValue++;
                    if (minutesValue === 60) {
                        minutesValue = 0;
                        hoursValue++;
                    }
                }
                updateStopwatch();
            }, 1000);
        });

        document.getElementById('stopButton').addEventListener('click', () => {
            clearInterval(stopwatchTimer);
        });

        document.getElementById('resetButton').addEventListener('click', () => {
            clearInterval(stopwatchTimer);
            hoursValue = 0;
            minutesValue = 0;
            secondsValue = 0;
            updateStopwatch();
        });
        document.getElementById('resetButton2').addEventListener('click', () => {
            clearInterval(stopwatchTimer);
            hoursValue = 0;
            minutesValue = 0;
            secondsValue = 0;
            updateStopwatch();
        });
        

//時間表示
function updateTime() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

                // ページが読み込まれたら初期表示を行う
                updateTime();

                // 1秒ごとに時間を更新する
                setInterval(updateTime, 1000);