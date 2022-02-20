/* 
Sullivan Nathan DIV Z
Ejercicio IF 10.js
*/
function mostrar()
{
	var numeroAleatorio;
	var maximo;
	var minimo;

	maximo = 10;
	minimo = 1;
	numeroAleatorio = Math.floor(Math.random() * (maximo + 1 - minimo)) + minimo;

	if (numeroAleatorio > 8) 
	{
		alert("EXCELENTE");
	} 
	else 
	{
		if (numeroAleatorio > 3 && numeroAleatorio < 9) 
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN