//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*Realizar el algoritmo que al presionar el botón "Mostrar" pida un mes del año por prompt, si es un "enero" o
 "febrero" informar por alert “Veranito!!!!” de lo contrario informar por alert “extraño enero y febrero!!!” .*/



function Mostrar()
{
var mes;

mes=prompt("ingrese un mes").toLocaleLowerCase();

switch(mes){
                case "enero":
                case "febrero":

                alert("veranitooooo!!!");
                break;

                default:

                alert("inviernoooo primavera otoño");
                break;


            




}












    }
	
	


