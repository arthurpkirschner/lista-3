function calcular() {
    var totalConta = parseFloat(document.getElementById("totalConta").value);

    if (isNaN(totalConta)) {
        alert("insira um valor valido para o total da conta.");
        return;
    }

    var valorPorAmigo = totalConta / 3;
    var valorCarlos = Math.floor(valorPorAmigo);
    var valorAndre = Math.floor(valorPorAmigo);
    var valorFelipe = totalConta - (valorCarlos + valorAndre);

    document.getElementById("resultado").innerHTML = "Carlos: R$" + valorCarlos.toFixed(2) +
                                                      "<br>Andre: R$" + valorAndre.toFixed(2) +
                                                      "<br>Felipe: R$" + valorFelipe.toFixed(2);
}
