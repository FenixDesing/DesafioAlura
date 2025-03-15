// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// constantes para la lista y el limite de participantes 

const listaAmigos = [];
const maxParticipantes = 10;

// funcion para agregar amigos a la lista 

function agregarAmigos() {
    const input = document.getElementById("amigo");
    const nombre = input.ariaValueMax.trim();

    //validaciones 

    if (nombre === "") {
        alert("Por favor, ingresa un numero valido.")
        return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(nombre)) {
        alert("El nombre no puede contener numeros ni caracteres especiales");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya a sido agregado");
        return;
    }

    //agregando nombres, actualizando y limpiando el campo de entrada

    listaAmigos.push(nombre);
    actualizarlista();//funcion 
    input.value = "";

}

//funcion para la lista visual 

function actualizarlista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//funcion para sortear 

function sortearAmigos() {
    if (listaAmigos.length === 0) {
        alert("Debes agregar al menos un nombre antes de sortear ");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random()* listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo Secreto es: <strong>${amigoSorteado}<strong></p>`;

    //boton reiniciar
    const botonSortear = document.querySelector(.button-draw);
    botonSortear.innerHTML = "<img src='assets/restart_icon.png' alt='Reiniciar'> Reiniciar";
    botonSortear.setAttribute("onclick", "reiniciarJuego()");
}

//funcion de reiniciar 