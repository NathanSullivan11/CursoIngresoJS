/*si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
*/

/* 
Sullivan Nathan DIV Z
Ejercicio 07 BIS V1.js
A + B + C + D + E + F + G + H + I + J
*/

function mostrar()
{
	var edad;
	var nombre;
	var estadoCivil;
	var mensaje;
	var edadPar;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	nombre = document.getElementById('txtIdNombre').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	mensaje = "Tienes edad para laburar " + nombre + "." + " A jubilarse.";
	edadPar = edad % 2;

	if (edad < 13)
	{
		mensaje = "Feliz día " + nombre;
		if (nombre == "Ricardo")
		{
			mensaje = mensaje + " Muy chiquito para ese nombre";
		}
	}
	else
	{
		if (edad < 18)
		{
			mensaje = "Usted es adolescente " + nombre;
			switch(estadoCivil)
			{
				case "Casado":
					mensaje = mensaje + " Casado quiere casa.";
					if (nombre == "Violeta")
					{
						mensaje = mensaje + " Como un color.";
					}
					if (edad == 17)
					{
						mensaje = mensaje + " Último año.";
					}
					break;
				case "Divorciado":
					mensaje = mensaje + " Toda una vida por delante.";
					if (nombre == "Violeta")
					{
						mensaje = mensaje + " Como un color.";
					}
					if (edad == 17)
					{
						mensaje = mensaje + " Último año.";
					}
					break;
			}
		}
		else
		{
			if (edad < 61)
			{
				mensaje = "Tienes edad para laburar " + nombre;
				switch(estadoCivil)
				{
					case "Casado":
						mensaje = mensaje + " Casado quiere casa.";
						if (edad == 33)
						{
							mensaje = mensaje + " Como cristo.";
						}
						break;
					case "Soltero":
						mensaje = mensaje + " A salir.";
						if (edad == 33)
						{
							mensaje = mensaje + " Como cristo.";
						}
						break;
				}
			}
			else
			{
				switch(estadoCivil)
				{
					case "Casado":
						mensaje = mensaje + " Casado quiere casa.";
						if(nombre == "Alfredo")
						{
							mensaje = mensaje + " Como el de QUEEN.";
						}
						if (edad == 88)
						{
							mensaje = mensaje + " Lindo Número.";
						}
						break;
					default:
						if(nombre == "Alfredo")
						{
							mensaje = mensaje + " Como el de QUEEN.";
						}
						if (edad == 88)
						{
							mensaje = mensaje + " Lindo Número.";
						}
						break;
				}
			}
		}
	}
	if (edadPar == 0)
	{
		mensaje = mensaje + " Sos par";
	}
alert(mensaje);
}



