function calcularIMC() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    if (isNaN(peso) || isNaN(estatura)) {
        console.log("Por favor, introduce valores válidos para peso y estatura.");
        return;
    }

    const imc = peso / (estatura * estatura);
    console.log("Nombre: ${nombre}");
    console.log("Edad: ${edad}");
    console.log("Peso: ${peso} kg");
    console.log("Estatura: ${estatura} m");
    console.log("Tu Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}");
}