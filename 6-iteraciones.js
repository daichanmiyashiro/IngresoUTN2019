//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

   var importe;
   var contador=0;
   var mayor;
   var menor;

   do{

        importe=parseFloat(prompt("ingrese el importe"));
                while(isNaN(importe) || importe<0)
                {importe=parseFloat(prompt("resingrese impoorte"));}

                if(contador==0)
                {mayor=importe;
                menor=importe;}

                if(importe>mayor){
                    mayor=importe;

                }else
                {menor=importe;
                }
                contador++;
   }while(contador<7);


   alert("el mayor importe es " + mayor + " y el menor importe es " + menor);
















} var importe;
var contador=0;
var mayor;
var menor;
var flag=0;
var diamayor;
var diamenor;

do{

     importe=parseFloat(prompt("ingrese el importe"));
             while(isNaN(importe) || importe<0)
             {importe=parseFloat(prompt("resingrese impoorte"));}
            
        

             if(importe>mayor || flago==0)
                {
                 mayor=importe;
                 diamayor=i;

                }
             if(importe<menor || flag==0)
                {menor=importe;
                diamenor=i;
                flag==1;
                }
             contador++;
}while(contador<7);


alert("el mayor importe es " + mayor + " y el menor importe es " + menor);
