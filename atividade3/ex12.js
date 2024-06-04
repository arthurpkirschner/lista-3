function separarNumeros() {
    var numero = parseInt(document.getElementById('numero').value);

    var centena = Math.floor(numero / 100);
    var dezena = Math.floor((numero % 100) / 10);
    var unidade = numero % 10;

    document.getElementById('resultado').innerHTML = "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
}
