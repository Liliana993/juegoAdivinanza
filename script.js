//el juego elige un numero al azar
let numeroAzar = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento')
let intentos = 0;


//esto se ejecuta cuando se toque el boton
function chequearResultado(){
    intentos ++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor introduce un numero valido entre 1 y 100';
        return
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Felicitaciones! lograste adivinar el número'
        mensaje.style.color = 'green';
        numeroEntrada.disable = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto! el numero es mayor al que dijiste';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = 'Mas bajo! el numero es menor al que dijiste';
        mensaje.style.color = 'yellow';
    }
}