/*
	Sullivan Nathan DIV Z
	Ejercicio Switch 05.js
*/
function mostrar()
{
	//tomo la hora
	var hora; 
	hora = document.getElementById('txtIdHora').value;
	hora = parseInt(hora);
	
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
	}
}//FIN DE LA FUNCIÓN