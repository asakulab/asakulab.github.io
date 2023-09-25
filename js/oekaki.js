let canvas = document.getElementById("drawArea");
let ctx = canvas.getContext("2d");
let drawing = false;

// 線の設定
ctx.lineWidth = 5;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = 'black';

// マウス操作のイベント
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);  // 追加: キャンバス外に出たときのイベント
canvas.addEventListener("mousemove", draw);

// タッチ操作のイベント
canvas.addEventListener("touchstart", (e) => { 
    e.preventDefault();
    startDrawing();
});
canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    stopDrawing();
});
canvas.addEventListener("touchmove", function(e) {
    e.preventDefault();  // 追加: タッチ操作のデフォルト動作を抑制
    let touch = e.touches[0];
    draw({clientX: touch.clientX, clientY: touch.clientY});
});

function startDrawing() {
    drawing = true;
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(event) {
    if (!drawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}


canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
