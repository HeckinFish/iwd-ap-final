var words = ["The Shape, ", "Orb, ", "Creature, ", "Beast, ", "Little Man, ", "Amorphous Blob."];
var msg = 'Words Used to describe Kosmo: ';

for (i = 0; i < words.length; i++) {
	msg += words[i];
}

var el = document.getElementById('words');
el.innerHTML = msg;