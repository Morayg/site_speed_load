//получает адрес сайта
var site = window.location.href;
var start = window.performance.timing.domContentLoadedEventEnd;

window.onload = function() {
	var time = performance.now();
	time = time - start;
    chrome.runtime.sendMessage({site1:site,time1:time});
    //выводим алерт если время ожидания превысили 10s
    if (time > 10000) {
    	alert ('Time loading page:<br>' + site + '<br>is: ' + (time/1000) + 'sec');
    }
  };
// Test