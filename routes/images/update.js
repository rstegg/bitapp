const Models = require('../../models')
const { Item } = Models

module.exports = (req, res) =>
  Item.update(
    { image: req.file.location },
    { where: { id: req.params.itemId, userId: req.user.id }, returning: true, raw: true }
  )
    .then(([ n, [ item ] ]) => !item ? Promise.reject('bad item') : item)
    .then(item => res.status(200).json({ image: item.image }))
    .catch(error => res.status(400).json({ error }))
