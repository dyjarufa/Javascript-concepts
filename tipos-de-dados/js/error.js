console.log('linha 1')
//throw new Error("Ocorreu um erro aqui!");//força um erro
console.log('linha 2')//Linha 2 não é executada

try {
    console.log(somar(10, new Array(10)))
} catch (error) {
    //console.log(error)
    console.log(error.name)     // Nome do erro: Ex TypeError
    console.log(error.message)  //Mesagem do erro: (is not a function)
    console.log(error.stack)    //saída completa do erro
} finally{
    console.log('Sempre executado')
}

function somar(a, b){
    //return a + b;
    //return a / b; -       NaN (quando nao consegue realizar uma operação matemática esse erro é gerado)
    //return b[3] -          Não existe essa posiçao
    //return a.nome -       essa propriedade não existe
    return a.exec(10)
}
