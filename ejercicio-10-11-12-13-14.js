//10-Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, 
// domingo, etc). El programa mostrará un mensaje personalizado para cada día de 
// la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. 
// En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve 
// a descansar” y terminar la captura de información.

/*let diaSemana = prompt("Ingrese un dia de la semana:")

while( diaSemana.toLowerCase() !== "domingo"){
   if(diaSemana.toLowerCase() === "lunes"){
      alert("Tomaste el primer dia de la semana")
  }else if(diaSemana.toLowerCase() === "martes"){
      alert("Tomaste el segundo dia de la semana")
  }else if (diaSemana.toLowerCase() === "miercoles"){
       alert("tomaste el tercer dia de la semana")
   }else if(diaSemana.toLowerCase() === "jueves"){
      alert("Tomaste el cuarto dia de la semana")
  }else if(diaSemana.toLowerCase() === "viernes"){
       alert("Tomaste el quinto dia de la semana")
   }else if(diaSemana.toLowerCase() === "sabado"){
       alert("Tomaste el sexto dia de la semana")
    }
    diaSemana = prompt("Ingrese un dia de la semana:");
}
if (diaSemana.toLowerCase() === "domingo") {
    alert("Ve a");
  }  */

//11-Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el 
// número efectivamente esté en ese rango, si no lo está imprima un mensaje de 
// error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si 
// está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10

/*let calificacion = parseInt(prompt("Ingrese una calificación de 1 a 10:"));
while (calificacion < 1 || calificacion > 10) {
    alert("Error. Ingrese una calificación válida entre 1 y 10.");
    calificacion = parseInt(prompt("Ingrese una calificación de 1 a 10:"));
  }
  
  if (calificacion < 6) {
    alert("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    alert("Regular");
  } else if (calificacion === 9) {
    alert("Bien");
  } else if (calificacion === 10) {
    alert("Excelente");
  }
  */

//Escribe un programa que responda a un usuario que quiere comprar un helado en 
//una conocida marca de comida rápida, cuánto le costará en función del topping 
//que elija. 
//• El helado sin topping cuesta 50 MXN. 
//• El topping de oreo cuesta 10 MXN. 
//• El topping de KitKat cuesta 15 MXN. 
//• El topping de brownie cuesta 20 MXN. 
//En caso de no disponer del topping solicitado por el usuario, el programa le 
//indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el 
//precio del helado sin ningún topping.

/*let costoHelado = 50;

let topping = prompt("Seleccione un topping: oreo, KitKat o brownie");

switch (topping.toLowerCase()) {
    case "oreo":
        costoHelado += 10;
        break;
    case "kitkat":
        costoHelado += 15;
        break;
    case "brownie":
        costoHelado += 20;
        break;
    default:
        alert("No tenemos este topping, lo sentimos.");
        break;
}

alert(`El costo total del helado es de ${costoHelado} MXN.`); */

/*13-Un conocido portal de educación en tecnología está ofreciendo programas para 
aprender a desarrollar aplicaciones. Escribe un programa que le indique a la 
persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción 
elegida. 
El programa educativo contempla 3 diferentes niveles, cada uno con su costo 
mensual:
• Course: $4999 MXN 
• Carrera $3999 MXN 
• Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento 
correspondiente al precio final. 
• Beca Facebook: 20% de descuento. 
• Beca Google: 15% de descuento. 
• Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto 
gastaría en total por el curso elegido, tomando en cuenta las siguientes 
duraciones: 
• Course: 2 meses 
• Carrera 6 meses 
• Master: 12 meses */

/*let curso = prompt("Ingrese su programa educativo: Course, Carrera, Master.")

let duracion = 0
let costoMensual = 0

switch (curso.toLowerCase()) {
    case "course":
      costoMensual = 4999;
      duracion = 2;
      break;
    case "carrera":
      costoMensual = 3999;
      duracion = 6;
      break;
    case "master":
      costoMensual = 2999;
      duracion = 12;
      break;
    default:
      alert("Opción inválida");
      break;
  }
  
  if (costoMensual > 0) {
    let beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua)");
    let descuento = 0;
  
    switch (beca.toLowerCase()) {
      case "facebook":
        descuento = 0.2;
        break;
      case "google":
        descuento = 0.15;
        break;
      case "jesua":
        descuento = 0.5;
        break;
      default:
        alert("Beca inválida");
        break;
    }
  
    if (descuento > 0) {
      let precioDescuento = costoMensual - (costoMensual * descuento);
      let costoTotal = precioDescuento * duracion;
  
      alert(`El costo mensual con descuento es de ${precioDescuento.toFixed(2)} MXN.`);
      alert(`El costo total del curso sería de ${costoTotal.toFixed(2)} MXN.`);
    }
  } */

//14-Realizar un programa que ayude a calcular el total a pagar de acuerdo a la 
//distancia recorrida por un vehículo con cargo extra por los litros consumidos, 
//tomando en consideración lo siguiente: 
//Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 
//0.10 y si es “autobús” 0.5. 
//Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es 
//mayor la cantidad de litros consumidos se ha de añadir 10 al total. 
//Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros 
//consumidos

let vehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús)");
let precioKilometro = 0;
let litrosConsumidos = parseInt(prompt("Ingrese la cantidad de litros consumidos"));
let distanciaRecorrida = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros"));
let costoTotal = 0;

switch (vehiculo.toLowerCase()) {
  case "coche":
    precioKilometro = 0.20;
    break;
  case "moto":
    precioKilometro = 0.10;
    break;
  case "autobús":
    precioKilometro = 0.5;
    break;
  default:
    alert("Tipo de vehículo inválido");
    break;
}

if (precioKilometro > 0) {
  costoTotal = (precioKilometro * distanciaRecorrida);

  if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    costoTotal += 5;
  } else {
    costoTotal += 10;
  }

  alert(`El total a pagar es de ${costoTotal} MXN.`);
} 