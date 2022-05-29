var estudiantes = ["Maria", "Sergio", "Daniel", "Rosa"];

function saludarEstudiantes(estudiante) {
      console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){ // mientras estudiantes.length sea menor a 0
    // se tiene que cumplir este loop.
    var estudiante = estudiantes.shift(); // genera una variable de
    // estudiante que va hacer igual a estudiantes.shift que es nuestro array
    // con la mutacion que va a estar sacando elementos
    saludarEstudiantes(estudiante); // despues de eso manda a llamar la
    // funcion que es saludar con la variable de estudiante.
}
// Es lo que ocurre con el shift con console.log(estudiantes);
(4)['Maria', 'Sergio', 'Daniel', 'Rosa']
Hola, Maria
(3)['Sergio', 'Daniel', 'Rosa']
Hola, Sergio
(2)['Daniel', 'Rosa']
Hola, Daniel
['Rosa']
Hola, Rosa