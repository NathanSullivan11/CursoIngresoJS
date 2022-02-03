/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
/*
Sullivan Nathan DIV Z
Trabajo Practico FerreteFacturacion2.js
*/
function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var tresHilos;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	perimetro = (largo + ancho)*2;
	perimetroTotal = perimetro*3; 

	alert("Se necesita comprar " + perimetroTotal + " metros de alambre.");
}
function Circulo () 
{
	var radio;
	var calculo;
	var pi;
	var tresHilos;
	
	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	pi = 3.14
	calculo = (radio*2)*pi;
	tresHilos = calculo*3

	alert("Se necesita comprar " + tresHilos + " metros de alambre.");
}
function Materiales () 
{
	var cemento;
	var cal;
	var largo;
	var ancho;
	var calculo;
	var area;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo*ancho;
	cemento = 2
	cal = 3

	calculoCemento = area*cemento	
	calculoCal = area*cal

	alert("Se necesitan " + calculoCemento + " bolsas de cemento y " + calculoCal + " bolsas de cal.")
}