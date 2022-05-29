var articulos = [
    { nombre: "Bici", costo: 3000 }, 
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var encuentraArticulo = articulos.find(function(articulo){
     return articulo.nombre === "Laptop";  //Find retoma solo la primer
     // coincidencia que vos marcaste al retornar un valor. No todo el array.
     // Si no existe ese valor no retorna nada. Se genera un nuevo array
});

encuentraArticulo;
//{nombre: 'Laptop', costo: 20000}

// -------------------------------------

articulos.forEach(function(articulo){ // Aca no se genera otro array
    // si no que solo llama a la array que ya esta creada y depende
    // lo que vos le pidas al console.log te trae como por ejemplo todos
    // los nombres del array articulo, lo mismo seria con el costo.
    console.log(articulo.nombre);
});

/* Bici
Tv
Libro
Celular
Laptop
Teclado
Audifonos */

//----------------------------

var articulosBaratos = articulos.some(function(articulo){ //El some hace
    // una validacion de verdadero o falso. Lo unico que nos regresa
    // en este ejemplo esque si existe algun valor menor a 700. Se genera
    // otro nuevo array.
    return articulo.costo <= 700;
});