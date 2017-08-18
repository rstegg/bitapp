const Models = require('../../models')
const { item } = Models

const itemAttrs = [ 'id', 'name', 'description', 'image' ]

module.exports = (req, res) =>
  item.getItemsByUser(req.user)
    .then(items => res.status(200).json({ items }))
    .catch(error => res.status(400).json({ error }))
