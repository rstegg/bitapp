const Models = require('../../models')
const { item } = Models

module.exports = (req, res) =>
  item.create({
    name: req.body.item.name || '',
    description: req.body.item.description || '',
    image: req.body.item.image || '',
    userId: req.user.id,
  })
  .then(item => { console.log(item); res.status(200).json({item}) })
  .catch(errors => res.status(400).json({errors}))
