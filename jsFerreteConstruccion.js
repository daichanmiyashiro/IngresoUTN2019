/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo;
    var ancho;
    var resultado;

    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);

    resultado= ((largo * 2) + (ancho * 2)) * 3;

    alert("La cantidad de alambre que se necesita es " + resultado + " metros");


}
function Circulo () 
{var radio;
    var resultado;


    radio=parseFloat(document.getElementById("Radio").value);
    
    resultado= ((2 * 3.14 * radio)* 3);

    alert("la cantidad de alambre que se necesita es " + resultado + " metros");

	
}
function Materiales () 
{var largo;
    var ancho;
    var cal;
    var cemento;
    var resultado;
    


    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);

    resultado= largo * ancho;
    cal= resultado * 3;
    cemento= resultado * 2;

    alert("La cantidad de cemento que se necesita es " + cemento + " kg y de cal " + cal + "kg");
	
}