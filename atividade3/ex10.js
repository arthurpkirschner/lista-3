function converterTempo() {
    var dias = parseInt(document.getElementById('dias').value);

    var anos = Math.floor(dias / 365);
    var meses = Math.floor((dias % 365) / 30);
    var diasRestantes = (dias % 365) % 30;

    var resultado = "";

    if (anos > 0) {
        resultado += anos + " ano(s), ";
    }

    if (meses > 0) {
        resultado += meses + " mes(es), ";
    }

    resultado += diasRestantes + " dia(s).";

    document.getElementById('resultado').innerHTML = "Tempo sem acidentes: " + resultado;
}
