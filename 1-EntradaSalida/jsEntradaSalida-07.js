/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*
Sullivan Nathan DIV Z
Ejercicio E/S 07.js
*/
function sumar()
{	
	var valor1;
	var valor2;
	var suma;

	valor1 = document.getElementById('txtIdNumeroUno').value;
	valor1 = parseInt(valor1);

	valor2 = document.getElementById('txtIdNumeroDos').value;
	valor2 = parseInt(valor2);

	suma = valor1 + valor2;

	alert("La suma es " + suma );	
}

function restar()
{
	var valor1;
	var valor2;
	var resta;

	valor1 = document.getElementById('txtIdNumeroUno').value;
	valor1 = parseInt(valor1);

	valor2 = document.getElementById('txtIdNumeroDos').value;
	valor2 = parseInt(valor2);

	resta = valor1 - valor2;

	alert("La resta es " + resta );
}

function multiplicar()
{ 
	var valor1;
	var valor2;
	var multiplicar;

	valor1 = document.getElementById('txtIdNumeroUno').value;
	valor1 = parseInt(valor1);

	valor2 = document.getElementById('txtIdNumeroDos').value;
	valor2 = parseInt(valor2);

	multiplicar = valor1 * valor2;

	alert("La multiplicación es " + multiplicar );
}

function dividir()
{
	var valor1;
	var valor2;
	var dividir;

	valor1 = document.getElementById('txtIdNumeroUno').value;
	valor1 = parseInt(valor1);

	valor2 = document.getElementById('txtIdNumeroDos').value;
	valor2 = parseInt(valor2);

	dividir = valor1 / valor2;

	alert("La división es " + dividir );
}

//txtIdNumeroUno
//txtIdNumeroDos