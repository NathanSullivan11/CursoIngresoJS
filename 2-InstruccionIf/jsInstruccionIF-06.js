/* 
Sullivan Nathan DIV Z
Ejercicio IF 06.js
*/
function mostrar()
{
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	if (edad > 12 && edad < 18) 
	{
		alert("Es adolescente");
	} 
	else 
	{
		if (edad > 17)
		{
			alert("Es mayor de edad")
		}
		else 
		{
			alert("Es un niño")	
		}
	}
}//FIN DE LA FUNCIÓN