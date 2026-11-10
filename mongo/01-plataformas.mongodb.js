use('videojuegos')

db.getName()

// insertOne: el primer documento
db.plataformas.insertOne({
    nombre: 'Nintendo Switch'
})

// Implícita: al insertar (lo normal)
db.plataformas.insertOne({
    nombre: 'PlayStation 5'
})

// Explícita
db.createCollection('ventas')

db.getCollectionNames()