const boton = document.getElementById("explorar");

boton.addEventListener("click", ()=>{

    document.querySelector(".catalogo").scrollIntoView({

        behavior:"smooth"

    });

});


const tarjetas=document.querySelectorAll(".card");

tarjetas.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 20px 40px rgba(230,0,18,.4)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="0 10px 25px rgba(0,0,0,.1)";

    });

});
