/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{var numero1;
    var numero2;
    var suma;

    numero1=parseInt(document.getElementById("numeroUno").value);
	numero2=parseInt(document.getElementById("numeroDos").value);
    suma= numero1 + numero2;

    alert ("la suma es " + suma);
	
	
}

function restar()
{var numero1;
    var numero2;
    var resta;
// SE PUEDE PONER PRESEINT PERO NO ES NECESARIO
  numero1=(document.getElementById("numeroUno").value);
	numero2=(document.getElementById("numeroDos").value);
    resta= numero1 - numero2;

    alert("la resta es " + resta);

	
}

function multiplicar()
{ var numero1;
    var numero2;
    var multiplicar;

  numero1=(document.getElementById("numeroUno").value);
	numero2=(document.getElementById("numeroDos").value);
    multiplicar= numero1 * numero2;

    alert("la multiplicacion es " + multiplicar);

	
}

function dividir()
{var numero1;
    var numero2;
    var dividir;

  numero1=(document.getElementById("numeroUno").value);
	numero2=(document.getElementById("numeroDos").value);
    dividir= numero1 / numero2;

    alert("la division es " + dividir);

	
}

