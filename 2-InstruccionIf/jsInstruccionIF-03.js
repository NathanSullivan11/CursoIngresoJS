
/* 
Sullivan Nathan DIV Z
Ejercicio IF 03.js
*/
function mostrar()
{
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	if (edad > 17) {
		alert("Es mayor de edad");
	} else {
		alert("Es menor de edad")
	}

}//FIN DE LA FUNCIÓN