/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
/*
Sullivan Nathan DIV Z
Trabajo Practico FerreteFacturacion1.js
*/
function Sumar () 
{
	var numero1;
	var numero2;
	var numero3;
	var suma;

	numero1 = document.getElementById('txtIdPrecioUno').value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById('txtIdPrecioDos').value;
	numero2 = parseInt(numero2);

	numero3 = document.getElementById('txtIdPrecioTres').value;
	numero3 = parseInt(numero3);

	suma = (numero1 + numero2 + numero3);

	alert("La suma es $" + suma);

}
function Promedio () 
{
	var numero1;
	var numero2;
	var numero3;
	var promediar;
	var cantidadDePrecios;

	numero1 = document.getElementById('txtIdPrecioUno').value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById('txtIdPrecioDos').value;
	numero2 = parseInt(numero2);

	numero3 = document.getElementById('txtIdPrecioTres').value;
	numero3 = parseInt(numero3);

	cantidadDePrecios = 3;

	promediar = (numero1+numero2+numero3)/cantidadDePrecios;

	alert("El promedio es $" + promediar);
}
function PrecioFinal () 
{
	var numero1;
	var numero2;
	var numero3;
	var cantidadTotal;
	var suma;
	var iva;
	var calculo;

	numero1 = document.getElementById('txtIdPrecioUno').value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById('txtIdPrecioDos').value;
	numero2 = parseInt(numero2);

	numero3 = document.getElementById('txtIdPrecioTres').value;
	numero3 = parseInt(numero3);

	iva = 21;
	suma = (numero1 + numero2 + numero3);
	calculo = suma * (iva/100) ;
	cantidadTotal = suma + calculo;

	

	alert("El precio final más IVA es $" + cantidadTotal);
}