function calcularArea() {
    var raio = parseFloat(document.getElementById('raio').value);

    var area = 3.14 * Math.pow(raio, 2);

    document.getElementById('resultado').innerHTML = "A area da pizza e aproximadamente " + area.toFixed(2) + " centímetros quadrados.";
}