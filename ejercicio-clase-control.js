/*Una tienda ofrece descuentos según el monto de la compra realizada. Si el monto es mayor o igual a 100 dólares, se aplica un descuento del 10%. Si el monto es mayor o igual a 200 dólares, se aplica un descuento del 20%. Si el monto es menor a 100 dólares, no hay descuento. Escribe un programa que calcule el descuento a aplicar y muestre el monto total a pagar.*/

const montoCompra = parseInt(prompt("Ingrese el monto de la compra: "))
let montoResultante = 0

if(montoCompra >= 100 && montoCompra < 200){
    montoResultante = (montoCompra - (montoCompra * 0.10))
} else if(montoCompra >= 200){
    montoResultante = (montoCompra - (montoCompra * 0.20))
} else {
    montoResultante = montoCompra
}

alert("El monto total a pagar es: " + montoResultante)