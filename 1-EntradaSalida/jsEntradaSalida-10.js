/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
Sullivan Nathan DIV Z
Ejercicio E/S 10.js
*/
function mostrarAumento()
{
	var resultado;
	var importe;
	var porcentaje;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe)

	porcentaje = importe*(25/100);

	resultado = importe - porcentaje

	document.getElementById('txtIdResultado').value = resultado;

	//alert("ok");
}
