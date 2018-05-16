//Wrapper

var valorString = "Curso Java Script"
console.log(valorString.substring(0,5))


//Processo Wrapper

var valortemp = new String(valorString);
var substr = valortemp.substring(0, 5)
valorString = null //garbage collector
console.log(substr);
substr = null; // garbage collector