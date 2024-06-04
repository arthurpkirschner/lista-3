function calcularArea() {
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);

    var area = comprimento * largura;

    if (!isNaN(area)) {
        document.getElementById('resultado').innerHTML = "A area do terreno e: " + area + " metros quadrados.";
    } else {
        document.getElementById('resultado').innerHTML = "insira valores validos para comprimento e largura.";
    }
}