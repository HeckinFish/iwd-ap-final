if (window.localstorage) {
	
	var fName = document.getElementById('fName');
	var lName = document.getElementById('lName');
	var email = document.getElementById('email');
	var reason = document.getElementById('reason');
	
	fName.value = localStorage.getItem('fName');
	lName.value = localStorage.getItem('lName');
	email.value = localStorage.getItem('email');
	reason.value = localStorage.getItem('reason');
	
	fName.addEventListener('input', function() { 
		localStorage.setItem('fName', fName.value);
	}, false);
	
	lName.addEventListener('input', function() { 
		localStorage.setItem('lName', lName.value);
	}, false);
	
	email.addEventListener('input', function() { 
		localStorage.setItem('email', email.value); 
	}, false);
	
	reason.addEventListener('input', function() { 
		localStorage.setItem('reason', reason.value); 
	}, false);
	
}