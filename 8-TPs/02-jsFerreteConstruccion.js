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
	var alambres;
	var cantidadTotalAlambre;
	var texto;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	perimetro = (largo + ancho)*2;
	alambres = 3
	cantidadTotalAlambre = perimetro*alambres; 
	texto = "Se necesita comprar " + cantidadTotalAlambre + " metros de alambre para alambrar con tres hilos un terreno rectangular con perimetro = " + perimetro + " metros";

	alert(texto);
	//alert("Se necesita comprar " + perimetroTotal + " metros de alambre.");
}
function Circulo () 
{
	var radio;
	var perimetro;
	var pi;
	var cantidadTotalAlambre;
	var texto;
	var alambres;
	
	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	pi = 3.14;
	alambres = 3;
	perimetro = (radio*2)*pi;
	cantidadTotalAlambre = perimetro*alambres;
	texto = "Se necesita comprar " + cantidadTotalAlambre + " metros de alambre para alambrar con tres hilos un terreno rectangular con perimetro = " + perimetro +" metros";

	alert(texto)
	//alert("Se necesita comprar " + tresHilos + " metros de alambre.");
}
function Materiales () 
{
	var cemento;
	var cal;
	var largo;
	var ancho;
	var area;
	var cantidadCal;
	var cantidadCemento;
	var texto;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo*ancho;
	cemento = 2;
	cal = 3;

	cantidadCemento = area*cemento;
	cantidadCal = area*cal;
	texto = "Se necesitan " + cantidadCemento + " bolsas de cemento y " + cantidadCal + " bolsas de cal para rellenar un contrapiso de " + area + " metros cuadrados.";

	alert(texto)
	//alert("Se necesitan " + calculoCemento + " bolsas de cemento y " + calculoCal + " bolsas de cal.")
}