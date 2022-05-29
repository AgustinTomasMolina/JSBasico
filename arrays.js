[] //se guarda valores de string, numero o objetos.

// Metodos que ayudan a MUTAR un array.

var frutas = ["Manzana", "Banana", "Cereza", "Pera"];

console.log(frutas); //con el nombre de la variable entras al array.

console.log(frutas.length); //Esta es al longitud que tiene la array osea
// el numero total de lo que guardaste en ella.

console.log(frutas[2]); //asi ingresas a los elementos de la array.

var masFrutas = frutas.push(); // Va agregar elementos al array creado
// principalmente, osea lo empuja para el final de la array.

var ultimo = frutas.pop(); //Elimina el ultimo elemento de la array.

var nuevaLongitud = frutas.unshift(); // Agrega un nuevo elemento pero
// Adelante del array. Por ejemplo, se utiliza en un caso de que el 
// presidente tiene que ser el primero en llegar. Con esto lo agregas
// Primero.

var borrarFruta = frutas.shift(); // Elimina el primer elemento de la 
// array, si o si tiene que ser el primer elemento. Ademas descuenta
// el numero de arrays. No como el pop

var posicion = frutas.indexOf(); // Un array tiene un Index, con esto
// nos ayuda en al busqueda de la posicion del array sabiendo el nombre.