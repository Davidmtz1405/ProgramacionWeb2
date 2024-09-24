// Iniciar los arreglos.
let carrito = []; // Inicia el arreglo de productos.
let total = []; // Inicia el arreglo precios de los productos.

// Función que maneja menu de opciones
function menu(){
    return parseInt(prompt(
        `Latiendita La Paca
        Elige una opción:

        1. Catálogo.
        2. Ver Productos en el Carrito y Total.
        3. Eliminar Producto del carrito.
        
        4. Salir.`));
}

// Función para el  flujo del programa.
function iniciarprograma(){
    let continuar = true;
    while (continuar){
        let opcion = menu();
        if (isNaN(opcion) || opcion === "") {
            opcion = 4;
        }
        switch(opcion){
            case 1:
                catalog();
                continuar = false;
                break;
            case 2:
                carritocompra();
                break;
            case 3:
                eliminar();
                continuar = false;
                break;
            case 4:
                continuar = false;
                alert("Gracias Vuelva Pronto");
                break;
            default:
                alert("Seleccione una opción válida");
                
        }
    }
}

// Lista de Productos
// Menú del catálogo.
function catalogmenu(){
    return parseInt(prompt(
        `Selecciona un Producto

        1. Playera -  $360
        2. Pantalón - $500
        3. Tenis -    $1000
        4. Gorra -    $250

        5. Regresar al Menú.`));
}
//Función para agregar productos al arreglo "carrito" y el precio arreglo "total"
function catalog(){
    let continuar = true;
    while (continuar){
        let opcion = catalogmenu();
        if (isNaN(opcion) || opcion === "") {
            iniciarprograma();
            break;
        }
        switch(opcion){
            case 1:
                var producto = {
                    nombre:"Playera",
                    precio:360
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                console.log(`${producto.nombre} agregado al carrito`)
                total.push(producto.precio);
                console.log(total);
                break;
            case 2:
                var producto = {
                    nombre:"Pantalón",
                    precio:500
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                console.log(`"${producto.nombre}" agregado al carrito`)
                total.push(producto.precio);
                console.log(total);
                break;
            case 3:
                var producto = {
                    nombre:"Tenis",
                    precio:1000
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                total.push(producto.precio);
                //Mandar datos a la consola
                console.log(`"${producto.nombre}" agregado al carrito`)
                console.log(total);
                break;
            case 4:
                var producto = {
                    nombre:"Gorra",
                    precio:250
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                total.push(producto.precio);
                //Mandar datos a la consola
                console.log(`"${producto.nombre}" agregado al carrito`)
                console.log(total);
                break;
            case 5:
                continuar= false;
                iniciarprograma();
                break;
            default:
                alert("Selecciona una opción válida")
        }
    }
}

// Ver los productos del carrito

function carritocompra(){
    let sum = 0; // Variable para sumar los valores del arreglo "total".

    for (let value in total) { //realizar suma del precio de los productos
        sum += total[value];
      }
    if(carrito.length === 0){ // Si no existe nada en el arreglo "carrito"
        alert("No hay productos en el carrito.");
        console.log("No hay productos en el carrito.");
    }else{ // Si hay elementos en el arreglo
        console.log(sum);
        let mensaje = "Carrito de Compras: \n";
        carrito.forEach((producto,index)=>{
            mensaje += `${index+1}. ${producto.nombre} == $${producto.precio} \n`
        });
        mensaje += `\n Total: $${sum} \n`
        //Mostrar el mensaje al usuario y mandarlo a consola
        alert(mensaje);
        console.log(mensaje);
    }
    
}

// Eliminar Articiulos del Carrito

function eliminarmenu(){ // Si no hay productos en el carrito, volver al menu principal
    if(carrito.length === 0){
        alert("No hay productos en el carrito.");
        console.log("No hay productos en el carrito.");
        iniciarprograma();
    }else{
        let mensaje = "Selecciona el Producto que desee Eliminar: \n";
        carrito.forEach((producto,index)=>{
            mensaje += `${index+1}. ${producto.nombre}\n`
        });
        return parseInt(prompt(mensaje));
    }
}

function eliminar(){
    let opcion = eliminarmenu();

    if (isNaN(opcion) || opcion === "") {
        iniciarprograma();

    } else if(opcion > 0 && opcion <= carrito.length){
        alert(`"${carrito[opcion-1].nombre}" ha sido eliminado.`);
        console.log(`"${carrito[opcion-1].nombre}" ha sido eliminado.`);
        carrito.splice((opcion-1), 1); //Elimina un elemento determinado por el input del usuario
        total.splice((opcion-1), 1); //Elimina un elemento determinado por el input del usuario
        iniciarprograma(); // Regresa al menú principal
        //manda datos a consola
        console.log(carrito);
        console.log(total);
    }else{
        alert("Número de producto no válido.");
        eliminar();

    }
}