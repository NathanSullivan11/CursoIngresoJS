 /* 
Sullivan Nathan DIV Z
Ejercicio IF 09.js
*/
function mostrar()
{
	var numeroAleatorio;
	var maximo;
	var minimo;

	maximo = 10;
	minimo = 1;

	numeroAleatorio = Math.floor(Math.random() * (maximo + 1 - minimo)) + minimo;
	alert(numeroAleatorio);	

}//FIN DE LA FUNCIÓN