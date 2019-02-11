function Mostrar()
{
//tomo la edad 
var edad;
var adolecente;

edad=parseInt(document.getElementById("edad").value);

adolecente=(edad<=13) && (edad>=17);

if(adolecente)
{alert("es adolecente");}

/* else 
{alert("sino no es adolcente");} */

 



}//FIN DE LA FUNCIÓN