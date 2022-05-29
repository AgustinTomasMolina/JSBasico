var miAuto = {
    marca: "Toyota", // Primero la palabra clave, y despues los valores
    // para seguir agregando palabras claves o propiedades se usa una ,
    // al final.
    modelo: "Corolla",
    año: 2020
};

//Para traer los valores de ese objeto por ejemplo miAuto se utiliza
miAuto.marca;
miAuto.modelo;
miAuto.año;


var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
         console.log(`Auto ${this.modelo} ${this.annio}`); // El this es 
         // una variable que hace referencia al objeto, en este caso
         // this hace referencia a miAuto.
    }
};
// Para poder invocar la funcion hay que llamarlo asi, traeria el modelo
// y el año
miAuto.detalleDelAuto();
