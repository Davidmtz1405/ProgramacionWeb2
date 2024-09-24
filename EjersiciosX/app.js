// Se genera X conforme al usuario
function generar() {
    const cantidad = Number(document.getElementById('numero').value);
    const simbolo = 'x';
    const salidaHorizontal = simbolo.repeat(cantidad);
    const salidaVertical = (simbolo + '\n').repeat(cantidad);

    document.getElementById('resultado').textContent = `${salidaHorizontal}\n${salidaVertical}`;
    console.log("Resultado en consola:");
    console.log(salidaHorizontal);
    console.log(salidaVertical);
}

//cuadrado de X
function generarCuadrado() {
    const simbolo = 'x';
    const cuadrado = (simbolo.repeat(4) + '\n').repeat(4);

    document.getElementById('cuadradoResultado').textContent = cuadrado;
    console.log("Cuadrado 4x4 en consola:");
    console.log(cuadrado);
}

//tablas de multiplicar
function generarTablas() {
    let tablas = '';

    for (let i = 1; i <= 10; i++) {
        tablas += `Tabla del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            tablas += `${i} x ${j} = ${i * j}\n`;
        }
        tablas += '\n';
    }

    document.getElementById('tablasResultado').textContent = tablas;
    console.log("Tablas de multiplicar en consola:");
    console.log(tablas);
}
