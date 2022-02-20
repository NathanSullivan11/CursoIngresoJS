/*
	Sullivan Nathan DIV Z
	Ejercicio Switch 10.js
*/
function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	mensaje = "No se viaja";

	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
			}	
			break;
		case "Otoño":
			mensaje = "Se viaja";
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					break;
				default:
					mensaje = "Se viaja";
					break;
			}
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN