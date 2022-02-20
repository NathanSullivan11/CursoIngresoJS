 /*
	Sullivan Nathan DIV Z
	Ejercicio Switch 09.js
*/
function mostrar()
{
	let estacionIngresada; 
	let destinoIngresado;
	let estadia;
	let precioFinal;
	let texto;
	let porcentaje;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	estadia = 15000;
	porcentaje = 1;
	
	switch (estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 1.2;
					break;
				case "Mar del plata":
					porcentaje = 0.8;
					break;
				default:
					porcentaje = 0.9;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 0.8;
					break;
				case "Mar del plata":
					porcentaje = 1.2;
					break;
				default:
					porcentaje = 1.1;
					break;
			}
			break;
		default:
			if (destinoIngresado != "Cordoba")
			{
				porcentaje = 1.1;
			}
			break;
	}

	precioFinal = estadia * porcentaje;
	texto = "Usted tiene que pagar $" + precioFinal + " para viajar a " + destinoIngresado + " en " + estacionIngresada;
	alert(texto);

}//FIN DE LA FUNCIÓN

