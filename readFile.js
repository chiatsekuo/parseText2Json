
var fs = require('fs');
 
fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    const first = data.replace(/[,.]/g,'')
    const second = first.replace(/\r\n/g, ' ')
    const thrid = second.split(' ');
    console.log(thrid);
    
});