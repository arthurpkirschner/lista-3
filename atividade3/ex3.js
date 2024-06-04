function calcularArrecadacao() {
    var quantidadePaes = parseInt(document.getElementById('quantidadePaes').value);
    var quantidadeBroas = parseInt(document.getElementById('quantidadeBroas').value);

    var arrecadacaoPaes = quantidadePaes * 0.12;
    var arrecadacaoBroas = quantidadeBroas * 1.50;

    var arrecadacaoTotal = arrecadacaoPaes + arrecadacaoBroas;

    if (!isNaN(arrecadacaoTotal)) {
        document.getElementById('resultado').innerHTML = "Arrecadacao total do dia: R$ " 
        + arrecadacaoTotal.toFixed(2) 
       
        + ".<br>Arrecadacao com paes: R$ " 
        + arrecadacaoPaes.toFixed(2) 
        
        + ".<br>Arrecadacao com broas: R$ " 
        + arrecadacaoBroas.toFixed(2) + ".";
    
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, insira quantidades validas de paes e broas.";
    }
}