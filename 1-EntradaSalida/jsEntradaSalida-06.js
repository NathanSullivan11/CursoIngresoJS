/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

/*Sullivan Nathan DIV Z
Ejercicio E/S 06.js
*/
function sumar()
{
	var numero1;
	var numero2;
	var suma;

	numero1 = document.getElementById('txtIdNumeroUno').value;
	numero1 = parseInt(numero1)

    numero2 = document.getElementById('txtIdNumeroDos').value;
    numero2 = parseInt(numero2)

    suma = numero1 + numero2;
    alert("La suma es "+ suma)


}

//txtIdNumeroUno
//txtIdNumeroDos

