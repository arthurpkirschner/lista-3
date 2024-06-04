function calcularLitros() {
    var precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    var valorPagamento = parseFloat(document.getElementById('valorPagamento').value);

    var litros = valorPagamento / precoGasolina;

    if (!isNaN(litros)) {
        document.getElementById('resultado').innerHTML = "Voce conseguiu colocar " + litros.toFixed(2) + " litros de gasolina no tanque.";
    } else {
        document.getElementById('resultado').innerHTML = "insira valores validos para o preco da gasolina e o valor do pagamento.";
    }
}