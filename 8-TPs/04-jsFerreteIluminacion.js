
/* Sullivan Nathan DIV Z
TP 4-FerreteIluminacion.js */ 

function CalcularPrecio () 
{
	let cantidadLamparitas;
 	let precioLamparita;
 	let precio;
 	let descuento;
 	let marca;
 	let iibb;
 	let impuesto;
 	let alertImpuesto;

 	cantidadLamparitas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparitas = parseInt(cantidadLamparitas);
 	precioLamparita = 35;
 	precio = cantidadLamparitas*precioLamparita;
 	descuento = 50;

 	marca = document.getElementById('Marca').value;
 	iibb = 10;

 	switch (cantidadLamparitas)
 	{
 		case 5:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuento = 40;
 					break;
 				default: 
 					descuento = 30;
 					break;
 			}
 			break;
 		case 4:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					descuento = 25;
 					break;
 				default: 
 					descuento = 20;
 					break;
 			}
 			break;
 		case 3:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuento = 15;
 					break;
 				case "FelipeLamparas":
 					descuento = 10;
 					break;
 				default:
 					descuento = 5;
 					break;
 			}
 			break;
 		case 2:
 		case 1:
 			descuento = 0;
 			break;
 	}
 	

	precioFinal = precio-(precio*descuento/100);

	if (precioFinal > 120)
	{	
		impuesto = precioFinal*(iibb/100);
		precioFinal = precioFinal + impuesto;
 		alertImpuesto = "Usted pago $" + impuesto + " de IIBB.";
 		alert(alertImpuesto);
	} 
	document.getElementById('txtIdprecioDescuento').value = "$" + precioFinal;
}

