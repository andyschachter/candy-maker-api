const Sequelize = require('sequelize')
const ProductsModel = require('./products')
const ManufacturersModel = require('./Manufacturers')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Products = ProductsModel(connection, Sequelize)
const Manufacturers = ManufacturersModel(connection, Sequelize)

Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)

module.exports = {
  Products,
  Manufacturers,
  Op: Sequelize.Op
}

