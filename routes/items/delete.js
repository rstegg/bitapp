const Models = require('../../models')
const { item } = Models

module.exports = (req, res) =>
  item.destroy({ where: { id: req.params.id, userId: req.user.id } })
    .then(item => res.status(200).json({item}))
    .catch(errror => res.status(400).json({error}))
