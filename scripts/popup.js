var alert = '<div class=\"header\"><a id=\"close\" href="#">X</a></div>';
alert += '<div><h1>Alert</h1>';
alert += 'The following contestant has been deemed "Dangerously Cute" by national authority. <br>';
alert += 'Please exercize caution before proceeding.</div>';

var elAlert = document.createElement('div');
elAlert.setAttribute('id', 'alert');
elAlert.innerHTML = alert;
document.getElementById('alertPlacement').appendChild(elAlert);

function dismissAlert() {
	document.getElementById('alertPlacement').removeChild(elAlert);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissAlert, false);