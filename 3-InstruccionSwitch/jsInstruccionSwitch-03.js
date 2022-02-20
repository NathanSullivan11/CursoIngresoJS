/*
	Sullivan Nathan DIV Z
	Ejercicio Switch 03.js
*/
function mostrar()
{
	//tomo el mes
	var mes; 
	mes = document.getElementById('txtIdMes').value;
	
	switch (mes)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 días");
			break;
		default:
			alert("Este mes tiene 30 días o más");
			break;
	}
}//FIN DE LA FUNCIÓN