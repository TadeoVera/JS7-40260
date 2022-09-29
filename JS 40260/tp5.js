/* Es una página que busca simular un Ecommerce. Se muestra el catálogo de Computadoras con sus variados precios teniendo en cuenta el impuesto IVA y detallandolo desde el principio.
Además se tendrá un semi sistema de carrito de compras, al cual se le podrán adjuntar diversas cantidades del mismo producto y sumarlas para llegar con los diferentes productos al total de la compra */

const producto = [
    { nombre: "pc gamer 1", precioIn: 200000}, //Lista de productos mediante un array
    { nombre: "pc gamer 2", precioIn: 210000},
    { nombre: "pc gamer 3", precioIn: 220000},
]

const buttonDos = document.getElementById("buttonDos"); //Boton que cambia la pagina al tema claro
buttonDos.addEventListener("click", function() {
    html.className = "lightHTML" 
    div.className = "light"
    titulo.className = "light"
    parrafo.className = "light"
    buttonDos.className = "darkHTML"
    button.className = "lightHTML"
});

const button = document.getElementById("button"); //Boton para el tema oscuro
button.addEventListener("click", function() {
    html.className = "darkHTML"
    div.className = "dark"
    titulo.className = "dark"
    parrafo.className = "dark"
    button.className = "darkHTML"
    buttonDos.className = "lightHTML"
});

iva = (n) => n * 21 / 100;  // Operacion Iva pre calculada

let html = document.getElementById("html") // Elementos varios del html para interactuar con JS

let titulo = document.getElementById("titulo")

let div = document.getElementById("contenedor")

let div2 = document.getElementById("contenedor2")

let botonCompra = document.getElementById("buttonTres")

let parrafo = document.getElementById("parrafo")

let cart = [] // Carrito array

let seleccion = document.getElementById("input"); // Peticion al usuario

let unidades = 0

let precio = 0 

let todosLosProductos = producto.map( (producto) =>  // Mapeando/encontrando el producto segun la peticion 
`${producto.boton} ${producto.nombre}: $${producto.precioIn} IVA: ${iva(producto.precioIn)} Precio Final: ${iva(producto.precioIn) + producto.precioIn} ${producto.imagen}`);
seleccion.addEventListener("submit", (e) => {        
    e.preventDefault();
    let inputs = e.target.children
    if(inputs[0].value.includes("pc") || inputs[0].value.includes("PC") || inputs[0].value.includes("Pc")){                          //Control de flujo para indicar si los datos ingresados son correctos o no.-
        contenedor.innerHTML = "";                      //En caso de serlos en la pagina se mostrara un Enviado.-
        let div = document.createElement("div");
        div.innerHTML = todosLosProductos.join(" ");
        contenedor.append(div);
        b1 = document.getElementById("b1")
        b2 = document.getElementById("b2")
        b3 = document.getElementById("b3")
        b1.addEventListener("click", (e) => {
            var precio = iva (200000) + 200000;
            unidades += 1;
        }
        )
        b2.addEventListener("click", (e) => { 
            var precio = iva (210000) + 210000;
            unidades += 1;
        }
        )
        b3.addEventListener("click", (e) => { 
            var precio = iva (220000) + 220000  ;
            unidades += 1;
        }
        )
        
cart.push({todosLosProductos, unidades, precio});

botonCompra.addEventListener("click", (e) => {
    
    cart.forEach((cartFinal)=>{
    alert (`Producto: ${cartFinal.todosLosProductos}, Unidades: ${cartFinal.unidades}, total a pagar por producto $${cartFinal.unidades * cartFinal.precio}`) 
 })                                                              // Mostrando al usuario su carrito
 for(cartFinal of cart) {
     let div2 = document.createElement ("div");
     div2.innerHTML = `
     <h2>Producto: ${cartFinal.todosLosProductos}</h2>
     <p>Unidades: ${cartFinal.unidades}</p>
     <b>Total a pagar por producto $${cartFinal.unidades * cartFinal.precio}</b>
     `;
     contenedor2.append(div2);
     }
    }
)}})

