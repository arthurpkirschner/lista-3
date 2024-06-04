function calcularValor() {
    var pesoPrato = parseFloat(document.getElementById('pesoPrato').value);

    var valorPagar = pesoPrato * 12.00;

    if (!isNaN(valorPagar)) {
        document.getElementById('resultado').innerHTML = "Valor: R$ " + valorPagar.toFixed(2);
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, insira um peso valido para o prato.";
    }
}