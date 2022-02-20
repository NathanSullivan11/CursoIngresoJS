/*
	Sullivan Nathan DIV Z
	Ejercicio Switch 07.js
*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Se encuentra en el oeste");
			break;
		case "Ushuaia":
			alert("Se encuentra en el sur de nuestro país");
			break;
		case "Cataratas":
			alert("Se encuentra en el norte de nuestro país ");
			break;
		case "Mar del plata":
			alert("Se encuentra en el este de nuestro país ");
			break;
	}
}//FIN DE LA FUNCIÓN