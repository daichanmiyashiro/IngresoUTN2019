function Mostrar()
{
//tomo la edad  
var edad;

edad=parseInt(document.getElementById("edad").value);

edad=edad>=18;

if(edad)
{alert("es mayor de edad");}
else
{alert("es menor de edad");}

alert("la funcion termina aca");


}//FIN DE LA FUNCIÓN