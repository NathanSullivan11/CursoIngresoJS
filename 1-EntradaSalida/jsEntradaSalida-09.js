/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
Sullivan Nathan DIV Z
Ejercicio E/S 09.js
*/
function mostrarAumento()
{
	var resultado;
	var sueldo;
	var porcentaje;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo)

	porcentaje = sueldo*(10/100);

	document.getElementById('txtIdResultado').value = porcentaje + sueldo;


	//alert("El aumento fue de " + porcentaje);
}

//txtIdSueldo
//txtIdResultado