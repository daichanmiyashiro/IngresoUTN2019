function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var flag=0;
var respuesta="s";

	do{
		numero=parseInt(prompt("ingrese un numero"));

		if(numero>=0){
			positivo=positivo + numero;
		}else
		{
			negativo=negativo * numero;
			flag=1

		}



	}while(respuesta=="s")




document.getElementById('suma').value=positivo;
if(flag==0){
	negativo==0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN