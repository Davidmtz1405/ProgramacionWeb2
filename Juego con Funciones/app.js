let respuesta;
let intentos;
let contador;

document.getElementById("ComenzarJuego").addEventListener("click", function() {
    iniciarJuego();
});

document.getElementById("submitButton").addEventListener("click", function() {
    let guess = parseInt(document.getElementById("guessInput").value);
    if (guess === null || isNaN(guess)) {
        alert("Solo acepta Números");
        return;
    }
    numerossolamente();
    iteration();
    aprox();
    if (guess == respuesta || intentos == 0) {
        winloose();
    }
});

function iniciarJuego() {
    random();
    intentos = 5;
    contador = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("livesRemaining").textContent = "Vidas restantes: " + intentos;
    document.getElementById("result").textContent = "";

    document.getElementById("gameContainer").style.display = "block";

    document.getElementById("submitButton").disabled = false;

    let startButton = document.getElementById("ComenzarJuego");
    startButton.textContent = "Reiniciar";
    startButton.classList.add("active");
}

function random(){
    respuesta = Math.floor(Math.random() * 10) + 1;
}

function aprox(){
    let guess = parseInt(document.getElementById("guessInput").value);
    if (guess < respuesta){
        document.getElementById("result").textContent = "La respuesta es un número mayor";
    } else if (guess > respuesta){
        document.getElementById("result").textContent = "La respuesta es un número menor";
    }
}

function winloose(){
    let guess = parseInt(document.getElementById("guessInput").value);
    if (guess != respuesta){
        alert("Perdiste" + "\n" + "El numero correcto es: " + respuesta);
    } else {
        alert("Ganaste" + "\n" + "Solo te tomó: " + contador + " intentos");
    }
    document.getElementById("submitButton").disabled = true; 
}

function numerossolamente(){
    let guess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(guess) || guess === ""){
        alert("Debes introducir un número");
        intentos++;
        contador--;
    }
}

function iteration(){
    let guess = parseInt(document.getElementById("guessInput").value);
    if (guess != respuesta){
        intentos--;
        contador++;
        document.getElementById("livesRemaining").textContent = "Vidas restantes: " + intentos;
    } else {
        contador++;
    }
}