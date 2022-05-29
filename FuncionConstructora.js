function auto(marca, modelo, annio){ // Tengo mi funcion que se llama auto
    // que va a tener como parametro las propiedades que yo espero que
    // mi objeto tengan 
    this.marca = marca; // this hace referencia a mi funcion constructora
    // y la palabra clave = a marca que hace referencia a la propiedad 
    // de mi objeto
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
// el operador new genera una nueva instacion de nuestra funcion
// constructora y una instancia es generar un objeto que deriva de otro
// objeto en este ejemplo autoNuevo deriva de auto. Por eso mismo
// toma las propiedades y se genera un nuevoAuto.