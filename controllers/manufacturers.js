const models = require('../models')

const getAllManufacturers = async (request, response) => {
  try {
    const manufacturers = await models.Manufacturers.findAll({
      include: [{ model: models.Products }]
    })

    return response.send(manufacturers)
  } catch (error) {
    return response.status(500).send('Unable to retrieve manufacturer list')
  }
}

const getManufacturerById = async (request, response) => {
  try {
    const { id } = request.params

    const manufacturer = await models.Manufacturers.findOne({
      where: { id },
      include: [{ model: models.Products }]
    })

    return manufacturer ? response.send(manufacturer) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve manufacturer')
  }
}

const getManufacturerBySearch = async (request, response) => {
  try {
    const { search } = request.params

    const manufacturer = await models.Manufacturers.findOne({
      attributes: ['id', 'name', 'country'],
      where: {
        name: { [models.Op.like]: `%${search}%` },
      },
      include: [{
        model: models.Products,
        attributes: ['id', 'name', 'yearIntroduced']
      }]
    })

    return manufacturer ? response.send(manufacturer) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve manufacturer')
  }
}

module.exports = {
  getAllManufacturers,
  getManufacturerById,
  getManufacturerBySearch
}
