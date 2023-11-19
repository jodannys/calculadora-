function edadDelNiño(edad) {
    let nombre = "jose"

    switch (true) {
        case (edad < 12):
            console.log(nombre + " tiene " + " " + edad + " años y es un niño")
            break;

        case (edad > 12 && edad < 18):
            console.log(nombre + " tiene " + " " + edad + " años y es un niño")
            break;

        case (edad > 18 && edad < 60):
            console.log(nombre + " tiene " + " " + edad + " años y es un niño")
            break;

        default:
            console.log(nombre + " tiene " + " " + edad + " años y es un niño")
            break;

    }

}
//console.log(edadDelNiño(25))


//****************FOR***************************/
//! Es una estructura de control en programación que permite repetir un bloque de código un
//! número específico de veces. 
//! Es muy útil cuando se conoce la cantidad exacta de repeticiones que se desea realizar. 
// quiero que me escriba lods numeros del 1 al 50
//el numero debe empezar con uno
//y debe ingrementar un o en cada iteracion hasta que llegue a 10


let numero = 1;
for (let i = 1; i < 10; i++) {
    numero++
    console.log(numero);
}

let mayorMenor = 11
for (let i = 1; i <= 10; i++) {
    mayorMenor--
    console.log(mayorMenor);
}

//************************WHILE******************/
// es una estructura de control que permite  repetir la ejecucion de un 
//bloque de codigo mientras se cumpla una condicion especifica 
//! while : verifica la condición antes de ejecutar el bloque de código. 

let num = 0
while (num < 10) {
    num++
    console.log(num);
}

let number = 10;
while (number > 1) {
    number--
    console.log(number);
}
//****************************DO..WHILE******************/
//Es una extructura de control que ejecuta un bloque de codigo una vez  y luego repite la ejecucion
//siempre que cumpla una condicion especifica
//!  Do-while : ejecuta el bloque de código al menos una vez y luego verifica la condición. 
  
let i = 1;
do {
    console.log(i);
    i++
} while (i <= 10)

let ib = 10;
do {
    console.log(ib);
    ib--
} while (ib >= 1)


//****************************DO..WHILE******************/
