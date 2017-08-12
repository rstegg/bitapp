const Models = require('../../models')
const { Item } = Models

const itemParams = ['name', 'description', 'image']

module.exports = (req, res) =>
  Item.update(
    itemParams,
    { where: { userId: req.user.id, id: req.params.id } }
  )
  .then(item => res.json(item))
  .catch(error => res.status(400).json({error}))
