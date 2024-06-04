function calcularSalario() {
    var salario = parseFloat(document.getElementById('salario').value);

    var salarioAumentado = salario * 1.15; // Aumento de 15%
    var salarioFinal = salarioAumentado * 0.92; // Desconto de 8%

    document.getElementById('resultado').innerHTML = "Salario inicial: R$ " 
    + salario.toFixed(2) + "<br>Salario com aumento: R$ " 
    + salarioAumentado.toFixed(2) + "<br>Salario final apos desconto de impostos: R$ " 
    + salarioFinal.toFixed(2);
}
