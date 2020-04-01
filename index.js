
var fs = require('fs');
 
// const filePath = 'input.txt';

exports.parseString = (filePath) =>{
    const readFile = fs.readFileSync(filePath, 'utf8').replace(/[,.?!]/g,'').replace(/\r\n/g, ' ').split(' ');
    return array2Json(readFile);
}

function array2Json(original){

    var dictionary = [];
    
	var copy = original.slice(0);
 
	for (var i = 0; i < original.length; i++) {
 
		var count = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				count++;
				delete copy[w];
			}
		}
 
		if (count > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = count;
			dictionary.push(a);
        }
    }
    return dictionary;
}

// console.log(parseString(filePath));