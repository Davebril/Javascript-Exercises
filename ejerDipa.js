/*1. Definir una función duplicarNumeros que reciba como parámetro una lista de números y
devuelva la lista con esos números duplicados.*/

function duplicarNumeros(Listanumeros) {

	for (let i = 0; i < Listanumeros.length; i++) {
		Listanumeros[i] = Listanumeros[i] * 2
	}

	return Listanumeros
	
}

console.log(duplicarNumeros([2,4,6]))


/*2. Definir una función multiplicar que reciba como parámetro una lista de números y
devuelva el resultado de la multiplicación de estos números.*/

function Multiplicar(numbers) {

	let resultado = 1

	for (let i = 0; i < numbers.length; i++) {

		resultado = resultado * numbers[i]
	}
		return resultado
}

console.log(Multiplicar([2,4,6]))

/*3. Definir una función calcularPromedio que reciba como parámetro una lista de números y
devuelva el promedio de estos números.*/

function CalcularPromedio(nums) {

	let suma = 0

	for (let i = 0; i < nums.length; i++) {
		suma = suma + nums[i]
	}

	const promedio = suma / nums.length


	return promedio
}

console.log(CalcularPromedio([2,4,6,8]))

//1. Definir una función contarEspacios que reciba un texto y devuelva la cantidad de
//espacios que tenga.//

function contarEspacios(texto) {

	let espacios = 0

		for (let i = 0; i < texto.length; i++) {
			if(texto[i] === ' ') {
				espacios += 1
			}
		}
		return espacios
}

console.log(contarEspacios('hola como estas?'))

//2. Definir una función buscarTweets que reciba una lista de tweets (mensajes) y un texto a
//buscar, y devuelva todos los tweets que contengan ese texto.

function buscarTweets(mensajes, textoAbuscar) {

	let mensaje = []

		for (let i = 0; i < mensajes.length; i++) {
			if (mensajes[i].includes(textoAbuscar)) {
				mensaje.push(mensajes[i])
			}
		}
		return mensaje
}	

	mistweets = ['Mi perro Scott es lo maximo',
					'Scott, mi mejor amigo',
					'Mi amigo esta durmiendo']

console.log(buscarTweets(mistweets, 'Scott'))

//3. Definir una función censurarTexto que reciba una frase y una lista de expresiones
//censuradas y devuelva la frase reemplazando esas expresiones por astericos que tengan
//su mismo tamaño.*//

function convertirExpresionAAsterisco(expresion) {
  let resultado = ''

  for (let i = 0; i < expresion.length; i++) {
    resultado += '*'
  }

  return resultado
}

function censurarTexto(texto, expresionesCensuradas) {
  let nuevoTexto = texto

  for (let i = 0; i < expresionesCensuradas.length; i++) {
    const expresionCensurada = expresionesCensuradas[i]
    if (nuevoTexto.includes(expresionCensurada)) {
      nuevoTexto = nuevoTexto.replace(expresionCensurada, convertirExpresionAAsterisco(expresionCensurada))
    }
  }

  return nuevoTexto
}

console.log(censurarTexto('El objetivo es censurar algunas palabras de este texto', ['censurar', 'este']))