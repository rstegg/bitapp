const Models = require('../../models')
const { Item } = Models

module.exports = (req, res) =>
  Item.create({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    userId: req.user.id,
  })
  .then(item => res.status(200).json({item}))
  .catch(errors => res.status(400).json({errors}))