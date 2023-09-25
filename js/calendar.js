let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

window.onload = function() {
    generateCalendar(currentMonth, currentYear);
};

function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let html = '';
    let day = 1;

    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDay.getDay()) || day > lastDay.getDate()) {
                html += '<td></td>';
            } else {
                html += `<td onclick="handleDateClick(this)">${day}</td>`;
                day++;
            }
        }
        html += '</tr>';
    }

    document.getElementById('calendarBody').innerHTML = html;
    document.getElementById('currentMonthYear').innerText = `${year}年 ${month + 1}月`;
}

function handleDateClick(tdElement) {
    tdElement.innerHTML = '<img src="https://pictogram2.com/p/p0015/i/m.png" alt="選択した日付" width="45px">';
}

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    generateCalendar(currentMonth, currentYear);
}
