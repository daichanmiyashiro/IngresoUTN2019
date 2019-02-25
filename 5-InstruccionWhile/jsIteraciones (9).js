function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta;
	var numero;
	var maximo;
	var minimo;
	


	do{
		numero=parseInt(prompt("ingrese un numero"));
		
		if(contador==0){
			maximo=numero;
			minimo=numero;
		}
		
		if(numero>maximo){
			maximo=numero
		}
		if(numero<minimo){
			minimo=numero
		}

		contador++;
		respuesta=prompt("desea continuar?");


	}
while(respuesta=="s")

	document.getElementById("maximo").value=maximo;

document.getElementById("minimo").value=minimo;

	
	




}//FIN DE LA FUNCIÓN