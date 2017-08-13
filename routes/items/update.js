const Models = require('../../models')
const { item } = Models
const { pick } = require('ramda')

const itemParams = ['name', 'description', 'image']

module.exports = (req, res) =>
  item.update(
    pick(itemParams, req.body),
    { where: { userId: req.user.id, id: req.params.id } }
  )
  .then(item => res.json(item))
  .catch(error => res.status(400).json({error}))
