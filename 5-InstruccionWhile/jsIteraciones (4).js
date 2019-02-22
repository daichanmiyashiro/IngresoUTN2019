function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>=0 && numero<=9))
	{numero=prompt("numero incorrecto.Ingrese otro numero");}

	document.getElementById("Numero").value="su numer es " + numero;
	

}//FIN DE LA FUNCIÓN