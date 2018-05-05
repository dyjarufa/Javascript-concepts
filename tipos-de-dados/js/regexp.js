var regexString = /JS/;
var regexConstrutor = new RegExp('J')

var string = 'Formação JavaScript Mestre JS Jedi'

console.log(regexString.test(string));// Encontrou a ocorrência 'JS' - true
console.log(regexConstrutor.exec(string))//volto um array de informação