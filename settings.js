function someFunc() {
  localStorage['alert_time_ls'] = document.getElementById('alert_time_input').value;

  var message = {alert_time: localStorage['alert_time_ls']};
	chrome.storage.sync.set(message: console.log('done'));
};

document.getElementById('add_button').onclick = someFunc;

