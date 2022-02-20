/*
	Sullivan Nathan DIV Z
	Ejercicio Switch 01.js
*/
function mostrar()
{
	//tomo el mes
	var mes;
	mes = document.getElementById('txtIdMes').value;

	switch (mes)
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!")
			break;
		case "Diciembre":
			alert("Felices vacaciones!!!");
			break;
	}
}//FIN DE LA FUNCIÓN