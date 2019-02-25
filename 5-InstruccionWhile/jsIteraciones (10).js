function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var par;
	var impar;

	var respuesta;
	var numero;
	var positivos;
	var negativos;
	var ceros;
	var acumPos=0;
	var acumNeg=0;
	var cantNeg=0;
	var cantPos=0;
	var cantCeros=0;
	var cantPares=0;
	var promPos;
	var promNeg;
	var diferencia;

	do{
		numero=parseInt(prompt("ingrese un numero"));
		if(numero>0){
			
			acumPos+=numero;
			cantPos++;
		}
		else if(numero<0){
		
			acumNeg+=numero;
			cantNeg++;

		}else{
			cantCeros++;

		}

		if(numero%2==0){
			cantPares++;
		}

		
respuesta=prompt("desea continuar? ");
	

}while(respuesta=="s")
	
	promPos=acumPos / cantPos;
	promNeg=acumNeg / cantNeg;
	diferencia=cantPos - cantNeg;



	document.write("1-suma de los negativos es " + acumNeg +  "<br>" );
	document.write("2-la suma de los positivos es " + acumPos + "<br>");
	document.write("3-la cantidad de los positivos es " + cantPos + "<br>");
	document.write("4-la cant de negativos es " + cantNeg + "<br>" );
	document.write("5- la cant de ceros es " + cantCeros + "<br>");
	document.write("6- la cant de num pares es " + cantPares + "<br>");
	document.write("7- promedio de positivos es " + promPos + "<br>");
	document.write("8- el promedio de los negativos es " + promNeg + "<br>");
	document.write("9- la diferencia es " + diferencia);

	
		

	





}//FIN DE LA FUNCIÓN