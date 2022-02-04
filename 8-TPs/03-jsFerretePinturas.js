/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
/*
Sullivan Nathan DIV Z
Trabajo Practico FerreteFacturacion3.js
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var centigrados;
	var texto;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseFloat(temperatura)

	centigrados = (temperatura-32)*(5/9);

	texto = temperatura + "º Fahrenheit son " + centigrados + "º centígrados"

	alert(texto);
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var fahrenheit;
	var texto;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseFloat(temperatura)

	fahrenheit = (temperatura*(9/5))+32;

	texto = temperatura + "º centígrados son " + fahrenheit + "º Fahrenheit"

	alert(texto);
}
