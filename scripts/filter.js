filterSelection("all");

function filterSelection(c) {
	var col, i;
	col = document.getElementsByClassName("column");
	
	if (c == "all") c = "";
	for (i = 0; i < col.length; i++) {
		RemoveClass(col[i], "show");
		if (col[i].className.indexOf(c) > -1) AddClass(col[i], "show");
	}
}

function AddClass (element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split (" ");
	
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
}

function RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

var btnCon = document.getElementById("buttons");
var btn = btnCon.getElementsByClassName("btn");

for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function(){
		var current = documen.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
	});
}
