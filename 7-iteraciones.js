//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var notas;
    var sexo;
    var contador = 0;
    var notaBaja;
    var acumulador = 0;
    var promedio;
    var varon=0;


    for (i = 0; i < 6; i++) {
        notas = parseInt(prompt("ingrese notas"));
        while (isNaN(notas) || notas < 0 || notas > 10) {
            notas = parseInt(prompt("reingrese nota"));

        }

        sexo = prompt("ingrese sexo");
        while (!(isNaN(sexo)) || sexo != "m" && sexo != "f") {
            sexo = prompt("resingrese sexo");

        }

         acumulador = acumulador + notas; 

        if (contador == 0) { notaBaja = notas; }
        if (notas < notaBaja) { notaBaja = notas; }
        if (notas >= 6 && sexo == "m") { varon++; }

    }

    promedio = acumulador / 6;

    alert("el promedio es " + promedio.toFixed(2) + ", la nota mas baja es " + notaBaja + " y los varones aprobados son " + varon);


}








