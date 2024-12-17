let botonOscuro = document.getElementById("dark-mode")
let bodyoscuro = document.getElementById("body-tienda")
console.log(botonOscuro)
console.log(bodyoscuro)

botonOscuro.addEventListener("click", function () {
    if (botonOscuro.textContent == "Modo oscuro") {
        bodyoscuro.style.backgroundColor = "black"
        botonOscuro.style.color = "black"
        botonOscuro.style.backgroundColor = "white"
        botonOscuro.textContent = "Modo claro"
    }
    else if (bodyoscuro.style.backgroundColor == "black") {
        bodyoscuro.style.backgroundColor = "bisque"
        botonOscuro.textContent = "Modo oscuro"
        botonOscuro.style.color = "white"
        botonOscuro.style.backgroundColor = "black"
    }
})
//localStorage.setItem("darkMode", "botonOscuro")

let productosTienda = [
    {

        id: 1,
        nombreProducto: "Royal Canin Medium",
        precio: "$7000",
        descripcion: "Royal Canin Medium es un alimento formulado especialmente para perros de razas medianas (de 11 a 25 kg de peso adulto). Esta dieta está diseñada para satisfacer sus necesidades nutricionales específicas, ayudando a mantener su salud y bienestar. Contiene una mezcla de proteínas de alta calidad, vitaminas y minerales que favorecen la digestión, el mantenimiento de una piel sana y un pelaje brillante, además de apoyar la función del sistema inmunológico. Su croqueta está adaptada al tamaño y forma de la mandíbula de los perros medianos, lo que favorece la masticación y mejora la absorción de nutrientes."

    },
    {

        id: 2,
        nombreProducto: "Royal Canin Adulto",
        precio: "$5000",
        descripcion: "Royal Canin Adult es una línea de alimentos secos para perros diseñados específicamente para satisfacer las necesidades nutricionales de perros adultos. Formulado con ingredientes de alta calidad, este alimento ayuda a mantener un peso corporal saludable, promueve la salud digestiva y favorece una piel y pelaje brillantes. Además, las croquetas están adaptadas para facilitar la masticación y promover la salud dental. Royal Canin ofrece diferentes fórmulas según el tamaño, raza y necesidades específicas del perro, asegurando una nutrición balanceada para cada tipo de perro adulto."

    },
    {
        id: 3,
        nombreProducto: "Kongo Gatos",
        precio: "$4000",
        descripcion: "Kongo es una marca de alimento para gatos que ofrece fórmulas balanceadas y nutritivas, adaptadas a las necesidades específicas de los felinos. Sus ingredientes están seleccionados para promover una dieta saludable, favoreciendo la digestión, el bienestar del pelaje y el mantenimiento de un sistema inmunológico fuerte. Además, las croquetas de Kongo están diseñadas para estimular el apetito de los gatos, asegurando una alimentación completa y sabrosa. Disponible en diversas presentaciones, es una opción confiable para mantener a los gatos felices y saludables."

    }
]
console.log(productosTienda[0].nombreProducto)
let descripcionProducto1 = document.getElementById("description-card1")
let descripcionProducto2 = document.getElementById("description-card2")
let descripcionProducto3 = document.getElementById("description-card3")
let precioProducto1 = document.getElementById("price-product1")
let precioProducto2 = document.getElementById("price-product2")
let precioProducto3 = document.getElementById("price-product3")
let botonDescripcion1 = document.getElementById("btn-description1")
let botonDescripcion2 = document.getElementById("btn-description2")
let botonDescripcion3 = document.getElementById("btn-description3")


botonDescripcion1.addEventListener("click", function () {
    precioProducto1.textContent = productosTienda[0].precio
    descripcionProducto1.textContent = productosTienda[0].descripcion
    botonDescripcion1.style.display = "none"
})

botonDescripcion2.addEventListener("click", function () {
    
    descripcionProducto2.textContent = productosTienda[1].descripcion
    botonDescripcion2.style.display = "none"
})

botonDescripcion3.addEventListener("click", function () {
 
    descripcionProducto3.textContent = productosTienda[2].descripcion
    botonDescripcion3.style.display = "none"
})