//7-Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente 
// mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” 
// solo al mostrar los números indicados por el usuario.

let num1 = parseInt(prompt("Ingrese un numero del 1 al 50:"));
let num2 = parseInt(prompt("Ingrese un numero del 1 al 50:"));

for (let i = 1; i <= 50; i++){
    if( i === num1 || i === num2){
        console.log(i + " Lotería");
    }else{
        console.log(i);
    }   
}

//8-Crea un programa que solicite al usuario números, si lo que este introduce es un 
//número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe 
//ingresar el número 0. Finalmente mostrar la lista de números capturados en 
//pantalla o en la consola

let numero = parseInt(prompt("Ingrese un numero (Ingrese 0 para terminar): "))
let arrayNumero = []

while (numero !== 0) {
    if (numero) {
      arrayNumero.push(numero);
    }
    numero = parseInt(prompt("Ingrese otro número (ingrese 0 para finalizar):"));
  }

  console.log(arrayNumero)

//9-Crea un programa que solicite al usuario letras o palabras, si es así guardar el 
// resultado. Para terminar de preguntar al usuario no debe escribir valor alguno. Al 
// terminar de capturar, mostrar en pantalla la concatenación de todas las palabras 
// capturadas.

let palabras = prompt("Ingresar una palabra (para finalizar no ponga algun valor):");
let palabrasCapturadas = ""

while (palabras !== null){
    palabrasCapturadas += palabras + " ";
    palabras = prompt("Ingresar una palabra (para finalizar no ponga algun valor):");
}

console.log(palabrasCapturadas);
