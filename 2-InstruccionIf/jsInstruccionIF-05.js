/* 
Sullivan Nathan DIV Z
Ejercicio IF 05.js
*/
function mostrar()
{
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	if (edad < 13 || edad > 17) 
	{
		alert("No es adolescente");
	}
}//FIN DE LA FUNCIÓN