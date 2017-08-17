const Models = require('../../models')
const { orderDetail } = Models

module.exports = (req, res, next) => {
  orderDetail.findAll({where: {userId: req.user.id, orderId: req.params.orderId}})
  .then(details => res.status(200).json({ details }))
  .catch(error => res.status(400).json({ error }))

}
