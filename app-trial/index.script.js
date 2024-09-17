document.getElementById('indexBtn').addEventListener('click', function() {
    document.getElementById('alertOverlay').style.display = 'block';
    document.getElementById('alertBox').style.display = 'block';
});

document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('alertOverlay').style.display = 'none';
    document.getElementById('alertBox').style.display = 'none';
});

document.getElementById('alertOverlay').addEventListener('click', function() {
    document.getElementById('alertOverlay').style.display = 'none';
    document.getElementById('alertBox').style.display = 'none';
});