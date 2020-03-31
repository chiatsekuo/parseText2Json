
var fs = require('fs');
 
const filePath = 'input.txt';



fs.readFile(filePath, 'utf8', function (err, data) {
            
    if (err) throw err
    const first = data.replace(/[,.]/g,'')
    const second = first.replace(/\r\n/g, ' ')
    const third = second.split(' ');
    console.log(third.length);
    
    const dictionary = new Array();
    let temp = new Object();
    temp.name = third[0];
    temp.count = 1;
    dictionary.push(temp);
    console.log(typeof(third[0]))
    console.log(typeof(dictionary[0].name))

    var compressed = [];
    // make a copy of the input array
    let original = third;
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
        }
    }
    console.log(compressed);
});