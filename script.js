let botonOscuro = document.getElementById("dark-mode")
let bodyoscuro = document.getElementById("body-tienda")
console.log(botonOscuro)
console.log(bodyoscuro)

botonOscuro.addEventListener("click", function(){
    if(botonOscuro.textContent == "Modo oscuro"){
        bodyoscuro.style.backgroundColor = "black"
        botonOscuro.style.color = "black"
        botonOscuro.style.backgroundColor = "white"
        botonOscuro.textContent = "Modo claro"
    }
    else if(bodyoscuro .style.backgroundColor == "black"){
        bodyoscuro.style.backgroundColor = "bisque"
        botonOscuro.textContent = "Modo oscuro"
        botonOscuro.style.color = "white"
        botonOscuro.style.backgroundColor = "black"
    }
   })
   