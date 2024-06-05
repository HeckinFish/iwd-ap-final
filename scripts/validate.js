function formValid() {
let fName = document.forms["form"]["fName"].value;
let lName = document.forms["form"]["lName"].value;
let email = document.forms["form"]["email"].value;
	if (fName == "" || lName == "" || email == "") {
		alert("All sections must be filled out!");
		return false;
	}
}