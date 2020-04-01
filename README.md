![npm](https://img.shields.io/npm/v/parsetext2json) ![NPM](https://img.shields.io/npm/l/parsetext2json) ![npm](https://img.shields.io/npm/dy/parsetext2json)
# parseText2Json

This repository lets you easily parse any `.txt` file containing strings or numbers into a dictionary format (JSON Object) that counts the frequency of each word/ number.

### How to use it?

1. Run `npm i parsetext2json` in your project directory. See an example in the next step.

2. Using *Node.Js* to run the code in `index.js`

   ```javascript
   const parse = require('parsetext2json');
   
   const filePath = 'input.txt';
   const output = parse.parseString(filePath);
   console.log(output);
   ```

3. The output should be like below:

   ```javascript
   [ { value: 'What', count: 1 },
     { value: 'is', count: 2 },
     { value: 'Lorem', count: 5 },
     { value: 'Ipsum', count: 5 },
     { value: 'simply', count: 1 },
     { value: 'dummy', count: 2 },
     { value: 'text', count: 2 },
    				...
    				...
    				...
     { value: 'PageMaker', count: 1 },
     { value: 'including', count: 1 },
     { value: 'versions', count: 1 } ]
   ```
