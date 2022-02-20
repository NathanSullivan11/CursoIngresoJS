/*
	Sullivan Nathan DIV Z
	Ejercicio Switch 02.js
*/
function mostrar()
{
	//tomo el mes
	var mes;
	mes = document.getElementById('txtIdMes').value;
	
	switch (mes){
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frío, ahora calor!")
			break;
		default:
			alert("Falta para el invierno")
			break;	
	}
}//FIN DE LA FUNCIÓN