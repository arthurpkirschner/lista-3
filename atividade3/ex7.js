function calcularDias() {
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);

    var diasDoAno = 0;

    // Adiciona os dias de cada mês ate o mes informado
    for (var i = 1; i < mes; i++) {
        diasDoAno += 30; // Considerando que cada mes tem 30 dias
    }

    // Adiciona os dias do mes informado
    diasDoAno += dia;

    document.getElementById('resultado').innerHTML = "Desde o inicio do ano ate a data informada, se passaram " + diasDoAno + " dias.";
}