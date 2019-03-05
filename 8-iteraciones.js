//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {


    var numero;
    var respuesta;
    var numeropar=0;
    var acumulador=0;
    var promedio;
    var contador=0;
    var flag=0;
    var menor;
    var mayor;

    do {
        numero=parseInt(prompt("ingrese un numero "));
        while(isNaN(numero) || numero<0)
        {numero=parseInt(prompt("reingrese numero"));}

        if(numero % 2==0 ){numeropar++;
         }

         if(numero<menor || flag==0)
         {menor=numero;
        }
        if(numero>mayor || flag==0)
        {mayor=numero;
        flag=1;}

         acumulador+=numero;
         contador++;
        respuesta = prompt("desea continuar?");


    } while (respuesta == "s");



    promedio=acumulador / contador;

    document.write("la cantidad de numero pares es " + numeropar + "<br/>el promedio es " + promedio + "<br/>la suma de los numeros es " + acumulador + "<br/>el maximo es " + mayor + " y el menor es " + menor );
















}
