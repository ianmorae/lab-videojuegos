use('videojuegos')

//varios tipos de datos
db.juegos.insertOne({
    _id: 'SW-001',
    titulo: 'The Legend of Zelda: Breath of the Wild',
    anio: 2017,
    precio: 59.99,
    copias: 4,
    disponible: true,
    lanzamiento: new Date('2017-03-03'),
    desarroladora: {
        _id: 1,
        nombre: 'Nintendo'
    },
    plataformas:['Nintendo Switch', 'Wii U'],
    generos: ['Aventura', 'Mundo Abierto']
})

//más juegos
use('videojuegos');
db.juegos.insertMany([
    {
        _id:'PC-001',
        titulo: 'The Witcher 3: Wild Hunt',
        anio: 2015,
        precio: 39.99,
        copias: 2,
        disponible: true,
        lanzamiento: new Date('2015-05-19'),
        desarroladora: { _id: 3, nombre: 'CD Projekt Red' },
        plataformas: ['PC', 'PlayStation 4'],
        generos: ['RPG', 'Mundo abierto']
    },
    {
        _id: 'PS-001',
        titulo: 'Elden Ring',
        anio: 2022,
        precio: 59.99,
        copias: 5,
        disponible: true,
        lanzamiento: new Date('2022-02-25'),
        desarrolladora: { _id: 4, nombre: 'FromSoftware' },
        plataformas: ['PC', 'PlayStation 5'],
        generos: ['RPG', 'Acción']
    },
    {
        _id: 'PS-002',
        titulo: 'Far Cry 6',
        anio: 2021,
        precio: 49.99,
        copias: 0,
        disponible: false,
        lanzamiento: new Date('2021-10-07'),
        desarrolladora: { _id: 2, nombre: 'Ubisoft' },
        plataformas: ['PC', 'PlayStation 5'],
        generos: ['Acción', 'Mundo abierto']
    }
])