//получает адрес сайта
var site = window.location.href;
var start = performance.now();

window.onload = function() {
	var time = performance.now();
	time = time - start;
    chrome.runtime.sendMessage({site1:site,time1:time});
  };
