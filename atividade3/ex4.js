function calcularDiasVida() {
    var nome = document.getElementById('nome').value;
    var idade = parseInt(document.getElementById('idade').value);

    var diasVida = idade * 365;

    if (!isNaN(diasVida)) {
        document.getElementById('resultado').innerHTML = nome.toUpperCase() + ", voce ja viveu " + diasVida + " dias.";
    } else {
        document.getElementById('resultado').innerHTML = "insira uma idade valida.";
    }
}