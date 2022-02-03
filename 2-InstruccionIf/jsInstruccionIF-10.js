function mostrar()
{
	var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

	if (numeroAleatorio === 9 || numeroAleatorio === 10) {
		alert("EXCELENTE");
	} else if (numeroAleatorio >= 4 && numeroAleatorio < 9) {
		alert("APROBÓ");
	} else if (numeroAleatorio < 4){
		alert("Vamos, la proxima se puede");
	}
		

}//FIN DE LA FUNCIÓN