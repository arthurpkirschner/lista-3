function calcularFerraduras() {
    var numeroCavalos = parseInt(document.getElementById('numeroCavalos').value);

    if (!isNaN(numeroCavalos) && numeroCavalos > 0) {
        var totalFerraduras = numeroCavalos * 4; // Cada cavalo tem 4 patas e precisa de 4 ferraduras
        document.getElementById('resultado').innerHTML = "Para equipar " + numeroCavalos + " cavalos, sao necessarias " + totalFerraduras + " ferraduras.";
    } else {
        document.getElementById('resultado').innerHTML = "insira um número valido de cavalos.";
    }
}