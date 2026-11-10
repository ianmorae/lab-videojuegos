use('videojuegos')

// Paso 5: un _id propio
db.desarrolladoras.insertOne({
    _id: 1,
    nombre: 'Nintendo'
})

// Paso 6: insertMany
db.desarrolladoras.insertMany([
    { _id: 2, nombre: 'Ubisoft' },
    { _id: 3, nombre: 'CD Projekt Red' },
    { _id: 4, nombre: 'FromSoftware' }
])

// Paso 7: error E11000 a propósito
// db.desarrolladoras.insertOne({
//     _id: 1,
//     nombre: 'Otra desarrolladora'
// })

// Paso 8: ordered (primero con true, luego con false)
db.desarrolladoras.insertMany([
    { _id: 5, nombre: 'Capcom' },
    { _id: 1, nombre: 'Repetida' },
    { _id: 6, nombre: 'Square Enix' }
], { ordered: false })