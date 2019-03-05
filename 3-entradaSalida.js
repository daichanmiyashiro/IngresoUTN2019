//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
   
var ancho;
var largo;
var perimetro;

ancho=parseFloat(document.getElementById("ancho").value);
largo=parseFloat(document.getElementById("largo").value);

perimetro=(ancho * 2 + largo * 2) * 6;

alert("el perimetro es " + perimetro);








}

