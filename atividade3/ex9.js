function calcularDistancia() {
    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);

    var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if (!isNaN(distancia)) {
        document.getElementById('resultado').innerHTML = "A distancia entre os pontos e: " + distancia.toFixed(2);
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores validos para as coordenadas dos pontos.";
    }
}