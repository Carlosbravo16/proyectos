const inputTrajeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");

//delimita la cantidad de datosque puede ingresar el usuario y los separa por "-" y "/"
const mascaraNumero = "####-####-####-####";
const mascaraFecha ="##/##";
const mascaraCVV = "###";

//arrays para guardar lo que ingresa el usuario
let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero =[];

inputTrajeta.addEventListener("keydown", (e) => {  //"e" me guarda la tecla que se imprima
    if (e.key === "Tab" && TarjetaNumero.length < 16 ){
        alert("Faltan numeros por digitar")
        return;
    }
    e.preventDefault(); //evita que se refresque la pantalla y que se digite caracteres no permitidos
    ingresoDatos(mascaraNumero, e.key, TarjetaNumero);
    inputTrajeta.value = TarjetaNumero.join("");
});

inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && TarjetaNumero.length < 4) {
        alert("Faltan numeros por digitar")
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value = FechaNumero.join("");
});

inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && TarjetaNumero.length < 3) {
        alert("Faltan numeros por digitar")
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join("");
});

function ingresoDatos(mascara, key, arreglo){
    let numeros = ["0", "1", "2", "3", " 4", "5", "6", "7", "8", "9"];
    if (key === "Backspace" && arreglo.length > 0) {
        arreglo.pop();
        return; // "pop" borra lo ultimo que se escribio de arreglo 
    }
    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length){
     if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/") {
        arreglo.push(mascara[arreglo.length], key); //"push" el arreglo lo envia "
     } else {
        arreglo.push(key);
     }
    }
}

