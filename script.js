let num1 = parseFloat(prompt("Agrega primer numero: "));
let num2 = parseFloat(prompt("Agrega segundo numero: "));
let operacion = parseInt(prompt("Selecciona que operacion quieres realizar: \n 1. SUMA \n 2.RESTA \n 3. multiplicacion \n 4.DIVISION \n **SELECCIONA SOLO EL NUMERO**"));



while (true){
    switch(operacion){
        case 1:
            console.log("La SUMA de los numeros es:", num1+num2);
            break;
        case 2:
            console.log("La RESTA de los numeros es:", num1-num2);
            break;
        case 3:
            console.log("La MULTIPLICACION de los numeros es:", num1*num2);
            break;
        case 4:
            console.log("La DIVISION de los numeros es:", num1/num2);
            break;
    }
    let validador = prompt("Quieres continuar? \n 1.Si \n 2.No \n **SOLO SELECCIONA EL NUMERO**" );
    if (validador == 1){
        validador = 0;
    }else break;
 num1 = parseFloat(prompt("Agrega primer numero: "));
 num2 = parseFloat(prompt("Agrega segundo numero: "));
 operacion = parseInt(prompt("Selecciona que operacion quieres realizar: \n 1. SUMA \n 2.RESTA \n 3. multiplicacion \n 4.DIVISION \n **SELECCIONA SOLO EL NUMERO**"));
}