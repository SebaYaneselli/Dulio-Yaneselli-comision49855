/// 
confirm("Gracias por entrar a TheGLAM.uy"+ "\n"+ "Tenemos una sorpresa para los clientes" )
let nombreCliente = prompt("Ingrese su nombre completo")
let dni = prompt ("Ingrese su DNI para acceder al regalo")


let productosApagar;
let descripcionProductoAPagar;
let primeraCompraCliente=0;
let descuentoAaplicar=0;
let preciolista;
let mensajeDespedidaalert;


while (primeraCompraCliente !==1 && primeraCompraCliente  !==2 ){
    primeraCompraCliente=+prompt("⚠️ Solo debes ingresar el número de la opción:"+ "\n"+ "\n"
    +"Ingresa: 1, Si es la PRIMERA vez que compras"+ "\n"
    +"Ingresa: 2, Si ya COMPRASTE ANTES "+ "\n" )

}   

if (primeraCompraCliente===1)
{
        alert("Gracias por elegirnos!!"+ "\n" + "\n" 
            +"Te damos la bienvenida a TheGLAM.uy  😎"+ "\n"+ "\n"
            +"Nos pone contento tener clientes nuevos, por eso te damos un descuento del 15% en esta compra🎉🎈"          
        );
}
    else
{
        alert("Gracias por volver a confiar en nosotros!!"+ "\n" + "\n"+ 
            "Aqui tu tienes tu descuento de 10%  🎉🎈 "          
        );


}


let comprarOtroProducto=1

while (comprarOtroProducto==1) {
    productosApagar = +prompt(
        "Seleccione el producto que quiere aplicar el descuento digitando el número correspondiente"+ "\n" + "\n" 
        +"1-Cartera Rumba UYU 1030"+ "\n"
        +"2-Bolso Kelly UYU 1590" + "\n" 
        +"3-Cartera de mano UYU 490"+ "\n" 
    )
    
    while (productosApagar !==1 && productosApagar  !== 2 && productosApagar  !== 3){
        productosApagar = +prompt("Solo debes ingresar el Codigo ⚠️ :"+ "\n"+ "\n"
        +"1-Cartera Rumba UYU 1030"+ "\n"
        +"2-Bolso Kelly UYU 1590" + "\n" 
        +"3-Cartera de mano UYU 490"+ "\n" 
        )

    }   


    switch(productosApagar){
        case 1: preciolista=1030; 
        break;
        case 2: preciolista=1590; 
        break;
        case 3: preciolista=490; 
        break;
        default : alert("No seleccionaste un producto a pagar");
        break;
    }

    switch(productosApagar){
        case 1: descripcionProductoAPagar="Cartera Rumba"; 
        break;
        case 2: descripcionProductoAPagar="Bolso Kelly"; 
        break;
        case 3: descripcionProductoAPagar="Cartera de mano"; 
        break;
        default : alert("No seleccionaste un producto a pagar");
        break;
    }
    
    switch(primeraCompraCliente){
        case 1: descuentoAaplicar = 0.15; 
        break;
        case 2: descuentoAaplicar = 0.10;    
        default :0;
        break;
    }

    totalClienteAPagar= parseFloat(preciolista * (1-descuentoAaplicar))


    alert("Solamente pagarás "+ " " + "UYU "+ totalClienteAPagar+ " por tu "+descripcionProductoAPagar+" 😎");

    comprarOtroProducto = +prompt(
        "Aprovecha el descuento y comprate otro producto!! "+ "\n" + "\n" 
        +"Ingresa: 1-SI, vas a comprar Otro"+ "\n"
        +"Ingresa: 2-Si NO " 
    )

    while (comprarOtroProducto !==1 && comprarOtroProducto !== 2){
        comprarOtroProducto=+prompt(" ⚠️ Solo puedes ingresar las opciones (1) o (2)")

    }


};

mensajeDespedidaalert = alert("Gracias por tu compra 🤩🤗💪, te esperamos nuevamente !");

/* let clienteDescuentaIva
const IVA = 0.22


while (clienteDescuentaIva==1 || clienteDescuentaIva==2)
{totalClienteAPagar= +prompt(
    "tenes empresa con RUT podes descontar el iva de tus compras!! "+ "\n" + "\n" 
    +"Ingresa: 1-Si tienes empresa"+ "\n"
    +"Ingresa: 2-Si no tienes empresa " 
)
}
if (clienteDescuentaIva ===1) 
{     descuentoiva =(function (totalClienteAPagar, IVA) { 
    return totalClienteAPagar*IVA
})(totalClienteAPagar,IVA)

    alert ("el importe con descuentos es : " + descuentoiva)


} else mensajeDespedidaalert = alert("Gracias por tu compra 🤩🤗💪, te esperamos nuevamente !"); */











