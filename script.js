
const btnSwich = document.querySelector('#swich')
console.log(btnSwich)
btnSwich.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwich.classList.toggle('active');
    //guardamos el estado actual del boton
    if (document.body.classList.contains('dark')) {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
})
//recuperamos el estado del boton
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add('dark');
    btnSwich.classList.add('active');
}
else {
    document.body.classList.remove('dark');
}

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

    },
    {
        id: 4,
        nombreProducto: "Royal Canin Gatos",
        precio: "$6000",
        descripcion: "Royal canin gatos es una marca de alimento para gatos que ofrece fórmulas balanceadas y nutritivas, adaptadas a las necesidades específicas de los felinos. Sus ingredientes están seleccionados para promover una dieta saludable, favoreciendo la digestión, el bienestar del pelaje y el mantenimiento de un sistema inmunológico fuerte. Además, las croquetas de Kongo están diseñadas para estimular el apetito de los gatos, asegurando una alimentación completa y sabrosa. Disponible en diversas presentaciones, es una opción confiable para mantener a los gatos felices y saludables."

    }
]
console.log(productosTienda[0].nombreProducto)
let descripcionProducto1 = document.getElementById("description-card1")
let descripcionProducto2 = document.getElementById("description-card2")
let descripcionProducto3 = document.getElementById("description-card3")
let descripcionProducto4 = document.getElementById("description-card4")
let precioProducto1 = document.getElementById("price-product1")
let precioProducto2 = document.getElementById("price-product2")
let precioProducto3 = document.getElementById("price-product3")
let precioProducto4 = document.getElementById("price-product4")
let botonDescripcion1 = document.getElementById("btn-description1")
let botonDescripcion2 = document.getElementById("btn-description2")
let botonDescripcion3 = document.getElementById("btn-description3")
let botonDescripcion4 = document.getElementById("btn-description4")

botonDescripcion1.addEventListener("click", function () {

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
botonDescripcion4.addEventListener("click", function () {

    descripcionProducto4.textContent = productosTienda[3].descripcion
    botonDescripcion4.style.display = "none"
})

const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})
const cartInfo = document.querySelector(".cart-product")
const rowProduct = document.querySelector(".row-product")
//lista de todos los productos
const productList = document.querySelector(".card-container")
//variables de arreglos de productos
let allProducts = []




productList.addEventListener("click", e => {

    if (e.target.classList.contains("btn-add-cart")) {

        const product = e.target.parentElement
        const infoProducto = {
            quantity: 1,
            title: product.querySelector(".name").textContent,
            price: product.querySelector(".price-product").textContent,
        }
        allProducts = [...allProducts, infoProducto]
        showHTML();
    }


})
//funcion para mostrar los productos en el carrito

const showHTML = () => {
    rowProduct.innerHTML = "";
    allProducts.forEach(product => {
        const containerProduct = document.createElement("div")
        containerProduct.classList.add("cart-product")
        containerProduct.innerHTML = `
            <div class="info-cart-product">
				<span class="cantidad-producto-carrito">${product.quantity}</span>
				<p class="titulo-producto-carrito">${product.title}</p>
				<span class="precio-producto-carrito">${product.price}</span>
			</div>
			<svg 
                xmlns="http://www.w3.org/2000/svg" 
                // fill="none" viewBox="0 0 24 24"                
                // stroke-width="1.5" stroke="currentColor" 
                // class="icon-close">
			<path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M6 18L18 6M6 6l12 12" />
			</svg>
        
        `
        rowProduct.append(containerProduct)
    })
}