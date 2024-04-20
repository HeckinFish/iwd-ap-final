/* var table = 3;
var operator = 'addition';
var i = 1;
var msg = '';

if (operator === 'addition') {
	while (i < 11) {
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
		i++;
	}
} else {
	while (i < 11) {
		msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
		i++
	}
}

var el = document.getElementById('board');
el.innerHTML = msg; */

var words = ["The Shape", "Orb", "Creature", "Beast", "Little Man", "Amorphous Blob"];
var msg = 'Words Used to describe Kosmo: ';

for (i = 0; i < words.length; i++) {
	msg += words[i] + ', ';
}

var el = document.getElementById('words');
el.innerHTML = msg;