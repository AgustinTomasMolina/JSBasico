var estudiantes = ["Maria", "Sergio" , "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
       console.log(`Hola , ${estudiantes}`)
}

for(var i = 0; i < estudiantes.length; i++) { //i es igual a 0, mientras i
    // sea menor a la longitud completa de estudiantes, i aumenta en 1. Si
    // Se cumple la condicion pasa lo de abajo, que llama a nuestra Array
    // en la posicion del index que seria 0 ya que i vale 0.
           saludarEstudiantes(estudiantes[i]); // Llamamos la funcion
           // con el array con la posicion del array i(0);
}


var estudiantes = ["Maria", "Sergio" , "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
       console.log(`Hola , ${estudiante}`)
}

for(var estudiante of estudiantes){
     saludarEstudiantes(estudiante); //la variable estudiante, sirve como
     // Index para traer la array estudiantes, la variable esta en singular
     // osea que trae de a 1 estudiante y lo invoca cuando llama la funcion
     // hasta que se termine el array.
}