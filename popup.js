//при открытии popup получает переменные
var Page = localStorage['page'].split(';');
var Time = localStorage['time'].split(';');
var data = '';
var n = 1;
//выводит текст в окне
for(var i = (Page.length - 1); i > Page.length-11; i--) {
	if(i >= 0) {
		data = data + '<tr class="timetable__tbody-row"><td class="timetable__id-cell">' + n + '</td><td class="timetable__url-cell">' + Page[i] + '</td><td class="timetable__time-cell"><p class="timetable__time">' + (Time[i] / 1000) + '</p></td></tr>';
		n++;
	}
}
var ata = document.getElementById("array");
ata.innerHTML = data;

