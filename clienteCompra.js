alert("Para consultar stock en consola filtrarStock()" + "\n"+ "Para agregar nuevos productos en consola nuevoIngreso() ")

const Producto = function(nombre,coleccion,tipo,stock){
    this.nombre = nombre
    this.coleccion = coleccion
    this.tipo = tipo
    this.stock = stock
}
//lista de productos//
let producto1= new Producto ("rubi","europea","bolso", 130)
let producto2= new Producto ("aurora","europea","bolso", 115)
let producto3= new Producto ("nuria","vintage","cartera", 90)
let producto4= new Producto ("mia","vintage","cartera", 84)
let producto5= new Producto ("amaia","summer24","mochila", 75)
let producto6= new Producto ("petunia","summer24","mochila", 55)
let producto7= new Producto ("rumba","casual","mochila", 13)
let producto8= new Producto ("carmel","casual","monedero", 10)
let producto9= new Producto ("oxford","USA","monedero", 9)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9]

//consulta de stock//
function filtrarStock(){
    let articulo = prompt("Consultar stock?").trim().toUpperCase()
    let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(articulo))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro: "+ articulo)
    }
}
//ingresar mercaderia a el stock//
function nuevoIngreso(){
    let nombre = prompt("ingresa el nombre").trim()
    let coleccion = prompt("ingresa la collecion").trim()
    let tipo = prompt("ingresa el tipo").trim()
    let stock = parseInt(prompt("ingresa la cantidad de stock"))

    
    if(isNaN(stock) || nombre=="" || coleccion=="" || tipo==""){
        alert("porfavor, ingresa valores validos")
        return
    }

    let producto = new Producto(nombre,coleccion,tipo,stock)
    if (lista.some((p)=> p.nombre === producto.nombre.toLowerCase())){
        alert("el producto ya existe en la lista")
        return
    }

    lista.push(producto)
    console.table(lista)
}