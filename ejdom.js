/*1. Crear una aplicación que tenga un campo para ingresar una edad y un botón. Si la edad
agregada es menor a 18, mostrar un cartel rojo que diga que es menor de edad. En el
caso contrario, mostrar un cartel verde que le de la bienvenida.

2. Al apretar enter dentro del campo para ingresar la edad, el usuario debe poder ver el
cartel mencionado en el primer ejercicio.

3. Prohibir que el usuario ingrese algo que no sea un número en el campo para ingresar
la edad.*/

window.onload = function() {
	const edad = document.querySelector('.edad')
	const boton = document.querySelector('.boton')
	const cartel = document.querySelector('.cartel')

	function capturarClick() {

		const edadIngresada = edad.value

		cartel.classList.add('cartelvisible')

		if (edadIngresada < 18) {
			cartel.classList.remove('cartelverde')
			cartel.classList.add('cartelrojo')
			cartel.innerHTML = "sos menor de edad"
		}	else {
			cartel.classList.add('cartelverde')
			cartel.classList.remove('cartelrojo')
			cartel.innerHTML = "bienvenido"
		}

	}

	boton.addEventListener('click', capturarClick)
}