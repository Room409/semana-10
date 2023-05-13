//4-Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número 
// mayor. Considerar el caso en que 2 números sean iguales.

let numero1 = prompt('Ingrese un numero')
let numero2 = prompt('Ingrese otro numero')
let numero3 = prompt('Ingrese el ultimo numero')

let numeros = [numero1,numero2,numero3]

function findMinMax(numeros){
   let numMax = Math.max(...numeros)
   let numMin = Math.min(...numeros)
   if(numMax===numMin){
       console.log(`Los numeros ${numMax} y ${numMin} son iguales.`)
    }else{
        console.log(`El numero mayor es ${numMax} y el numero menor es ${numMin}`)
    }

}
findMinMax(numeros)


//5-Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es 
// lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o 
// domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje

let diaSemana = prompt("Ingrese un dia de la semana")

function semana(diaSemana) {
    if (diaSemana.toLowerCase() === "lunes") {
        console.log(`Tomaste el primer dia de la semana ${diaSemana}`)

    } else if (diaSemana.toLowerCase() === "viernes") {
        console.log(`Tomaste el quinto dia de la semana ${diaSemana}`)

    } else if (diaSemana.toLowerCase() === "sabado") {
        console.log(`Tomaste el sexto dia de la semana ${diaSemana}`)
    } else if (diaSemana.toLowerCase() === "domingo") {
        console.log(`Tomaste el septimo dia de la semana ${diaSemana}`)
    } else {
        console.log("Tomaste un dia de la semana que no esta asignado")
    }
}
semana(diaSemana)

//6-Crea un programa que pregunte al usuario un número. Mostrar los números que 
// son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let num = parseInt(prompt("Ingrese un numero"))

for(let i = 1; i <= num; i++){
   if(i %5 === 0){
       console.log(i)
    }
}

