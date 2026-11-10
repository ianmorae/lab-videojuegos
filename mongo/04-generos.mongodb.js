use('videojuegos')

// Ejercicio A: la colección generos
db.generos.insertMany([
    { _id: 1, nombre: 'Aventura', estado: true },
    { _id: 2, nombre: 'RPG', estado: true },
    { _id: 3, nombre: 'Acción', estado: true },
    { _id: 4, nombre: 'Mundo abierto', estado: true },
    { _id: 5, nombre: 'Arcade', estado: false }
])