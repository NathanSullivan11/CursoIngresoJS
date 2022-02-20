
/* 
Sullivan Nathan DIV Z
Ejercicio Rompecocos 05/02
*/


function mostrar()
{  
	var diametroMayorCm;
	var diametroMenorCm;
	var ladosMayoresCm;
	var ladosMenoresCm;
	var diametroMayorMts;
	var diametroMenorMts;
	var ladosMayoresMts;
	var ladosMenoresMts;
	var area;
	var cola;
	var mtsPapel;
	var perimetro;
	var mtsVarilla;
	var cantidadCometas;
	var mtsPapelTotal;
	var mtsVarillaTotal;
	var texto;

	diametroMayorCm = prompt("Ingrese la medida del diametro mayor del cometa en centímetros");
	diametroMayorCm = parseFloat(diametroMayorCm);
	diametroMenorCm = prompt("Ingrese la medida del diametro menor del cometa en centímetros");
	diametroMenorCm = parseFloat(diametroMenorCm);
	ladosMayoresCm = prompt("Ingrese una única medida para los lados mayores del cometa en centímetros");
	ladosMayoresCm = parseFloat(ladosMayoresCm);
	ladosMenoresCm = prompt("Ingrese una única medida para los lados menores del cometa en centímetros");
	ladosMenoresCm = parseFloat(ladosMenoresCm);
	cantidadCometas = prompt("Ingrese la cantidad de cometas a construir");
	cantidadCometas = parseFloat(cantidadCometas);

	diametroMayorMts = diametroMayorCm/100;
	diametroMenorMts = diametroMenorCm/100;
	ladosMayoresMts = ladosMayoresCm/100;
	ladosMenoresMts = ladosMenoresCm/100;

	area = (diametroMayorMts * diametroMenorMts)/2;
	cola = area*(10/100);
	mtsPapel = area + cola;

	perimetro = 2*(ladosMayoresMts + ladosMenoresMts);
	mtsVarilla = perimetro + diametroMayorMts + diametroMenorMts;

	mtsPapelTotal = mtsPapel * cantidadCometas;
	mtsVarillaTotal = mtsVarilla * cantidadCometas;

	texto = ("Se necesitan " + mtsPapelTotal + "m² de papel y " + mtsVarillaTotal + "m de varillas para la construcción de " + cantidadCometas + "cometas.");
	alert(texto);
}
/*Ejercicio Guia Sabado 5/02*/

/*	var productoDos;
	var productoTres;
	var porcentajeDescontado;
	var precioBruto;
	var cantidadProductos;
	var promedio;
	var iva;
	var precioIva;
	var precioFinal;
	var descuento;
	var precioConDescuento;
	var texto;

	productoUno = prompt("Ingrese el precio del primero producto");
	productoUno = parseFloat(productoUno);
	productoDos = prompt("Ingrese el precio del segundo producto");
	productoDos = parseFloat(productoDos);
	productoTres = prompt("Ingrese el precio del tercer producto");
	productoTres = parseFloat(productoTres);

	porcentajeDescontado = prompt("Ingrese porcentaje para descontar");
	porcentajeDescontado = parseFloat(porcentajeDescontado);

	precioBruto = productoUno + productoDos + productoTres;

	cantidadProductos = 3;
	promedio = (precioBruto)/cantidadProductos;

	iva = 21;
	precioIva = (precioBruto*(iva/100));
	precioFinal = precioBruto + precioIva;

	descuento = precioFinal * (porcentajeDescontado/100);
	precioConDescuento = precioFinal - descuento;	
		
	texto = "El precio en bruto  es $" + precioBruto + ", el promedio es $"+ promedio + ", el precio final mas iva es $" + precioFinal + " y el precio final con descuento es $" + precioConDescuento;

	alert(texto);*/

	


