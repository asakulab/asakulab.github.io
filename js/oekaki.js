// キャンバス要素を取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 線の初期設定
let lineWidth = 5;
let lineColor = "#000000";

// タッチイベントをリスン
canvas.addEventListener("touchstart", startPosition);
canvas.addEventListener("touchend", endPosition);
canvas.addEventListener("touchmove", draw);

// クリックイベントをリスン
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

// ドラッグ操作を無効化
canvas.addEventListener("mousedown", function (e) {
    e.preventDefault();
});

// スワイプ操作を無効化
canvas.addEventListener("touchstart", function (e) {
    e.preventDefault();
});

// 線の太さを調整する input 要素の変更イベントをリスン
const lineWidthInput = document.getElementById("lineWidth");
lineWidthInput.addEventListener("input", function () {
    lineWidth = parseInt(this.value, 10);
});

// 線の色を調整する input 要素の変更イベントをリスン
const lineColorInput = document.getElementById("lineColor");
lineColorInput.addEventListener("input", function () {
    lineColor = this.value;
});

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = lineColor;

    const rect = canvas.getBoundingClientRect();
    const x = (e.touches[0].clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.touches[0].clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
