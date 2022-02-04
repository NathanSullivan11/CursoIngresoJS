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
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var texto;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = (precioUno + precioDos + precioTres);

	texto = ("La suma es $" + suma);
	alert(texto);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promediar;
	var cantidadDePrecios;
	var texto;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	cantidadDePrecios = 3;
	
	promediar = (precioUno+precioDos+precioTres)/cantidadDePrecios;
	texto = "El promedio es $" + promediar;
	alert(texto);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var cantidadTotal;
	var suma;
	var iva;
	var calculo;
	var texto;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	iva = 21;
	suma = (precioUno + precioDos + precioTres);
	calculo = suma * (iva/100) ;
	cantidadTotal = suma + calculo;
	
	texto = "El precio final más IVA es $" + cantidadTotal;

	alert(texto);
}