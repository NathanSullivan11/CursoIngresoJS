/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*
Sullivan Nathan DIV Z
Ejercicio E/S 08.js
*/
function SacarResto()
{
	var valor1;
	var valor2;
	var resto;

	valor1 = document.getElementById('txtIdNumeroDividendo').value;
	valor1 = parseInt(valor1);

	valor2 = document.getElementById('txtIdNumeroDivisor').value;
	valor2 = parseInt(valor2);

	resto = valor1 % valor2;


	alert("El resto es " + resto );
}
