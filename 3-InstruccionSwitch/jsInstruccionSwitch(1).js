function Mostrar()
{
//tomo el mes
var meses;
meses=document.getElementById("mes").value;

switch(meses){

            case "Enero":
            case "Febrero":
                        alert("vacaciones");
                        break;

            case "Marzo":
                        alert("comienzo de clase");
                        break;

            case "Julio":
                        alert("se viene las vacaciones");
                        break;

            case "Diciembre":
                        alert("pileta");
                        break;

            default:
                        alert("elige de nuevo");
                        break;
                        
}



}//FIN DE LA FUNCIÓN