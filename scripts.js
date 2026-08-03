// ===============================
// BOTÓN EXPLORAR
// ===============================

const explorar = document.getElementById("explorar");

explorar.addEventListener("click", () => {

    document.getElementById("autos").scrollIntoView({
        behavior: "smooth"
    });

});

// ===============================
// BOTONES VER MÁS
// ===============================

const botones = document.querySelectorAll(".card button");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const auto = boton.parentElement.querySelector("h3").textContent;

        alert("Has seleccionado: " + auto + "\n\nPróximamente podrás ver toda la información del vehículo.");

    });

});

// ===============================
// FORMULARIO
// ===============================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = formulario.querySelector('input[type="text"]').value;

    if(nombre === ""){

        alert("Por favor escribe tu nombre.");

        return;

    }

    alert("¡Gracias " + nombre + "! Tu solicitud fue enviada correctamente.");

    formulario.reset();

});

// ===============================
// ANIMACIÓN DE TARJETAS
// ===============================

const tarjetas = document.querySelectorAll(".card");

const mostrarTarjetas = () => {

    const pantalla = window.innerHeight;

    tarjetas.forEach((tarjeta) => {

        const posicion = tarjeta.getBoundingClientRect().top;

        if(posicion < pantalla - 100){

            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0px)";

        }

    });

};

tarjetas.forEach((tarjeta)=>{

    tarjeta.style.opacity="0";
    tarjeta.style.transform="translateY(50px)";
    tarjeta.style.transition="0.8s";

});

window.addEventListener("scroll", mostrarTarjetas);

mostrarTarjetas();

// ===============================
// MENÚ ACTIVO
// ===============================

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach((enlace)=>{

    enlace.addEventListener("click",()=>{

        enlaces.forEach((e)=>{

            e.style.color="white";

        });

        enlace.style.color="#ff3c00";

    });

});

// ===============================
// MENSAJE DE BIENVENIDA
// ===============================

window.addEventListener("load",()=>{

    console.log(" Bienvenido a MontielCar");

});
