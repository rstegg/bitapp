const Models = require('../../models')
const { Item } = Models
const { pick } = require('ramda')

const ItemParams = [ 'name', 'description', 'image' ]

module.exports = (req, res) =>
  Item.update(
    pick(ItemParams, req.body.item),
    { where: { userId: req.user.id, id: req.params.id }, returning: true, raw: true }
  )
    .then(([ n, [ item ] ]) => !item ? Promise.reject('bad item') : item)
    .then(item => res.json({ item }))
    .catch(error => res.status(400).json({ error }))
