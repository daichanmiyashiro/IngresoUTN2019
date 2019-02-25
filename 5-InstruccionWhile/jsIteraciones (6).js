function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
	var promedio;

	do{
		numero=parseInt(prompt("ingrese un numero"));
		acumulador=acumulador + numero;
		contador+=1

		respuesta=prompt("desea continuar? ").toLocaleLowerCase;
		

	}
	while(respuesta=="s")

	promedio=acumulador / 5;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;


}//FIN DE LA FUNCIÓN