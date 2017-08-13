const Models = require('../../models')
const { Item } = Models

module.exports = (req, res) =>
  Item.destroy({ where: { id: req.params.id, userId: req.user.id } })
    .then(item => res.status(200).json({item}))
    .catch(errror => res.status(400).json({error}))
