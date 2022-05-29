var articulos = [
    { nombre: "Bici", costo: 3000 }, 
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){ // El filter
    // nos ayuda a filtrar un array buscando un tipo de valor. Nos crea
    // un nuevo array con esos por ejemplo articulos filtrados.
         return console.log(articulo.costo <= 500);
});

var nombreArticulos = articulos.map(function(articulo){ //crea un nuevo 
    //array con los resultados de la llamada a la función indicada
    // aplicados a cada uno de sus elementos. Por ejemplo aqui trae los
    // nombres que estan guardados en el array.
    return console.log(articulo.nombre);
});

(7)['Bici', 'Tv', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos'];