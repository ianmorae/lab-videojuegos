use('videojuegos')

//un _id propio
db.desarrolladoras.insertOne({
    _id: 1,
    nombre: 'Nintendo'
})

//insertMany
db.desarrolladoras.insertMany([
    { _id: 2, nombre: 'Ubisoft' },
    { _id: 3, nombre: 'CD Projekt Red' },
    { _id: 4, nombre: 'FromSoftware' }
])

//error a propósito
// use('videojuegos');
// db.desarrolladoras.insertOne({
//     _id: 1,
//     nombre: 'Otra desarrolladora'
// })

// ordered
use('videojuegos');
db.desarrolladoras.insertMany([
    { _id: 5, nombre: 'Capcom' },
    { _id: 1, nombre: 'Repetida' },
    { _id: 6, nombre: 'Square Enix' }
], { ordered: false })