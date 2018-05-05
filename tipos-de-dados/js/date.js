
//Retorna o objeto date com a data atual
var data = new Date();
console.log(typeof data) //mostra que é um objeto
console.log(data)

//Passando um formato de string
var dataString = new Date("05/05/2018")
console.log(dataString)

console.log(dataString.getFullYear()) //pego o ano
console.log(dataString.getMonth() + 1)//Pega o mes corrente
console.log(dataString.getDay())//Aqui retorna o dia da semana
console.log(dataString.getDate())//retorna o dia do mes
console.log(data.getHours())
console.log(data.getMinutes())

//passando por parametro
var dataParam = new Date(2018, 05, 05)
console.log(dataParam)

