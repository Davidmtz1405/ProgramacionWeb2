async function generarQR() {
    // Obtén los valores de los campos de entrada
    const nombre = document.getElementById("input1").value;
    const correo = document.getElementById("input2").value;
    const institucion = document.getElementById("input3").value;
    const dependencia = document.getElementById("input4").value;

    // Verifica que todos los campos estén completos
    if (!nombre || !correo || !institucion || !dependencia) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crea el texto que quieres convertir en QR
    const textoQR = `Nombre: ${nombre}\nCorreo: ${correo}\nInstitución: ${institucion}\nDependencia: ${dependencia}`;

    // Codifica el texto para URL
    const urlTextoQR = encodeURIComponent(textoQR);

    // Llama a la API para generar el QR
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${urlTextoQR}&size=200x200`;

    // Muestra el QR en la página
    document.getElementById("qr-code").innerHTML = `<img src="${apiUrl}" alt="Código QR">`;
}