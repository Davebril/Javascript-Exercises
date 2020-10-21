/* 1. Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo.
Ej: Hola Juan!
*/

var name = prompt('Ingrese nombre:')
console.log('Hola ' + name + '!')

/* 2. Pedir un número mediante prompt(), parsearlo, sumarlo a otro que se encuentre 
almacenado en una variable y luego mostrar el resultado en consola.
*/

var request = prompt("Ingrese un numero:")
var number = 5
suma = number + parseInt(request)
console.log(suma)

/* 3. Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo
en un alert
*/

var solicitar = prompt('Ingrese su primer texto:')
var solicitar2 = prompt('Ingrese su segundo texto:')
alert(solicitar + ' ' + solicitar2)