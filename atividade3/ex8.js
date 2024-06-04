function calcularValor() {
    var quantidadePequenas = parseInt(document.getElementById('quantidadePequenas').value);
    var quantidadeMedias = parseInt(document.getElementById('quantidadeMedias').value);
    var quantidadeGrandes = parseInt(document.getElementById('quantidadeGrandes').value);

    var valorTotal = (quantidadePequenas * 10) + (quantidadeMedias * 12) + (quantidadeGrandes * 15);

    if (!isNaN(valorTotal)) {
        document.getElementById('resultado').innerHTML = "O valor arrecadado vai ser de R$ " + valorTotal.toFixed(2);
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, insira quantidades validas de camisetas.";
    }
}