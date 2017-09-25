var ar_page = [];
var ar_time = [];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
ar_page.push(request.site1); // данные о сайте
ar_time.push(request.time1); // данные о проведенном времени
localStorage['page'] = ar_page.join(';');
localStorage['time'] = ar_time.join(';');
  });

