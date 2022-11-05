//Declaramos variables
var operandoa;//Se declara la variable para realizar las operaciones de suma, resta, multipliación y division
var operandob;//Se declara la variable para realizar mostrar el resultado cuando se usa alguna de las operaciones aritmeticas
var operacion;//Se declara la variable para indicar la operación aritmetica que se va a realizar
function init(){//Se usa para inicializar el body del html en la pagina web
    //variables
    //Se le asigna a cada boton de la calculadora una variable y se llama cada uno desde el id del html respectivamente//
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var borrar = document.getElementById('borrar');
}
//Eventos de click
//Se le asigna el metodo onclick a cada boton de la calculadora, para que al darle click sobre dicho boton se muestre un valor en la pantalla
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();//En este caso al darle click sobre el boton reset, se llama a la función resetear que es creada más adelante en el código
}
borrar.onclick = function(e){
    resultado.textContent = resultado.textContent.toString().slice(0,-1);//En este caso se le indica que cuando se cree una cadena de numeros, al darle click sobre el botón se borre de uno en uno empezando por la derecha
}
//Se llama a las variables declaradas al principio del codigó para poder darle la función correspondiente a cada una de las operaciones matematicas, al darle click sobre dichos botones
//Se llama a la función limpiar la cual se declara más adelante en el codigo, con el objetivo de limpiar la pantalla de la calculadora cuando se usa dicha operación
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
//En este caso se llama a la variable igual para mostrar el resultado de las operaciones aritmeticas, llamando a la función resolver que se declara más adelnate en el codigo para poder realizar la operación matematica correspondiente y mostrar su resultado al darle click sobre dicho botón
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
//Se declara esta función para cuando sea necesario limpiar la pantalla de la calculadora y que no aparezca ningun valor en ella
function limpiar(){
    resultado.textContent = "";
}
//Se declara esta función para borrar todos los valores que en ese momento en la pantalla y para que el valor de la calculadora vuelva a su estado 0 en todos los casos, es decir se reincia la calculadora  
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
//Esta función se crea con el fin de que la calculadora pueda realizar las operaciones aritmeticas correspondeinetes
function resolver(){
    var res = 0;//Esta variable se declara para darle el valor de la operación artiemtica que por defecto da como resultado 0 si sus valores son ambos 0
    switch(operacion){//Se usa un ciclo dentro de la función para que si se cumple la condición de cada case la calculadora ejecute la operación aritmetica correspondiente usando el break para que la calculadora solo realice la operación indicada
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();//Se llama esta función para que el valor de la calculadora vuelva a su estado 0 cuando se termina de realizar la operación aritmetica, asi si no se borra el resultado con el boton reset y se escribe un numero nuevo, se realizara la nueva operación aritmetica sin tener en cuenta la anterior operación 
    resultado.textContent = res;
}

//Modo dia y Modo noche
let modo=document.getElementById("modo");//Se crea la variable modo y se llama al id del html del boton que se utilizara para poner el modo que deseemos
let body=document.body;//Se crea la variable body y se llama al body del html

modo.addEventListener("click", function(){//Se le asigna la función onclick al botón para que cuando se le de click encima se active el modo deseado
    let val=body.classList.toggle("dark");//Se crea la variable val para que al darle click sobre el botón el body cambie a su clase dark y se apliquen los estilos de dicho modo. El toggle se utiliza para que cuando se vuelva a dar click sobre el botón se vuelvan a aplicar los estilos cuando el body no tiene la clase dark
    localStorage.setItem("modo",val)//El local storage se utiliza para que al recargar la pagina web esta conserve los estilos que se dieron al oprimir el botón, es decir si oprimo el botón para obtener el 'Modo oscuro' y recargo la pagina se mantendra en modo oscuro y no volvera a su estado incial
})

let valor=localStorage.getItem("modo");//Se crea la variable valor para que conserve el modo al recargar la pagina comose explico anteniormente
//Se usa el conducional para cuando el valor de la variable sea true se agregue al body la clase dark y si no es true se quite la clase
if (valor=="true") {
    body.classList.add("dark");
} else {
    body.classList.remove("dark");
}