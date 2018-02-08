var fs = require('fs');
var files = fs.readdirSync('./');
var str = '';
files.forEach(element => {
    if (element.endsWith('.md') && element != 'README.md')
        str += ',{name:"' + element.substr(0,element.length-3) + '"}';
});
str ='(function(window){var word=['+ str.substr(1)+'];window.word=word;})(this);';
fs.writeFileSync('json.js',str);
console.log(files);