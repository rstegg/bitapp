const Models = require('../../models')
const { Item } = Models

const productParams = ['name', 'description', 'image']

module.exports = (req, res) =>
  Item.getItemsByUser(req.user)
  .then(items => res.status(200).json({items}))
  .catch(error => res.status(400).json({error}))