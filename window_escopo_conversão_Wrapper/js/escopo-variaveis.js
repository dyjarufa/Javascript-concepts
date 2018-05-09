var cliente = "Benício" // Aqui a varável assume o escopo global
console.log(window.cliente) //posso usar o window, já que varivel esta em escopo global
var msgVenda = "Olá " + cliente; //Variável msgCliente em escopo gobal
console.log(msgVenda, "GLOBAL")


function realizarVenda(item, valor){
    //msgVenda = "Venda realizada com sucesso" - cuidado: ao remover a palavra "var" a varável passa a ser global!!!
    var msgVenda = "Venda realizada com sucesso..."
    console.log("cliente: ", cliente) //consigo usar varivel global em qualquer escopo!
    console.log(msgVenda + " LOCAL") //Ordem de precedência - a variável mais interna(neste caso da função) fica com o valor
    console.log("item: ", item)
    console.log("valor: ", valor)
    console.log(msgVenda)

    function total(){
        var msgVenda = "Total da compra: " + valor + "  - Escopo Função Interna"; //A prece^dencia agora é da Fução
        console.log(msgVenda)
    }
    
    
total();

}

realizarVenda("Tv", 2500.00);


//console.log(item) - Não consigo acessar pq esta em escopo local da função
//console.log(msgVenda)