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
	var calculo;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura)

	calculo = (temperatura-32)*(5/9);

	alert(temperatura + "º Fahrenheit son " + calculo + "º centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var calculo;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura)

	calculo = (temperatura*(9/5))+32;

	alert(temperatura + "º centígrados son " + calculo + "º Fahrenheit");
}
