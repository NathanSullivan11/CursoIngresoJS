/*
	Sullivan Nathan DIV Z
	Ejercicio Switch 08.js
*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Aca hace frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Aca hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN