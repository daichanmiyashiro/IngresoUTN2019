function Mostrar()
{
//tomo la edad  

    var edad;
    var estadoCivil;

    edad=parseInt(document.getElementById("edad").value);
    estadoCivil=document.getElementById("estadoCivil").value;

    if(edad<18 && estadoCivil!="Soltero")
    {alert("es muy pequeño para No ser soltero");
}


}//FIN DE LA FUNCIÓN