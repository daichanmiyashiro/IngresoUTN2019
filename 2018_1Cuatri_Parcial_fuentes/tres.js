function mostrar()
{
var precio;
var descuento;
var precioFinal;

precio=parseFloat(prompt("ingrese el precio"));
descuento=parseFloat(prompt("ingreses el porcentaje de descuento"));

precioFinal=precio - (precio * descuento / 100);

document.getElementById("elPrecioFinal").value=precioFinal;

}
