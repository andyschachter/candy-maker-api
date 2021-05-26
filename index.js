const express = require('express')
const { getAllManufacturers, getManufacturerBySearch } = require('./controllers/manufacturers')
const { getAllProducts, getProductBySearch } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)

// app.get('/manufacturers/:id', getManufacturerById)
app.get('/manufacturers/:search', getManufacturerBySearch)

app.get('/products', getAllProducts)

// app.get('/products/:id', getProductById)
app.get('/products/:search', getProductBySearch)

app.listen(1346, () => {
  console.log('Listening on port 1346...') // eslint-disable-line no-console
})
