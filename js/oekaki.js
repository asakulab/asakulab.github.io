// script.js

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearButton = document.getElementById('clearButton');

let drawing = false;

canvas.addEventListener('mousedown', () => {
    drawing = true;
    ctx.beginPath();
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = brushSize.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
}

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


canvas.addEventListener('touchstart', () => {
    drawing = true;
    ctx.beginPath();
});

canvas.addEventListener('touchend', () => {
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener('touchmove', draw);

ctx.lineTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;