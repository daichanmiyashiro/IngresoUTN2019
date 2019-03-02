function mostrar()
{

var numero1;
var numero2;
var suma;

numero1=parseFloat(prompt("ingrese su primer numero"));
numero2=parseFloat(prompt("ingrese su segundo numero"));

if(numero1==numero2){
    alert(numero1 + " " + numero2);

} 
else if(numero1>numero2){

    alert(numero1 - numero2);

}
else{
    
    suma=numero1 + numero2;

    if(suma>10){
        alert("la suma es " + suma + " y supero a 10");
    }else{
        alert(suma);
        
    }
    

}


}
