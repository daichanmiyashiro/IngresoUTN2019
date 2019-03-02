function mostrar()
{
var planeta;

planeta=prompt("ingrese un planeta del sistema solar").toLocaleLowerCase();

switch(planeta){
                case "tierra":
                            alert("aca vivimos");
                            break;

                case "mercurio":
                case "venus":
                            alert("aca hace mas calor");
                            break;

                default:
                        alert("aca hace mas frio");
                        break;

}









}
