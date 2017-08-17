const Models = require('../../models')

const P = require('bluebird')
const fs = require('fs')
const path = require('path')
const { item } = Models

//FIXME: this should also depend on process.env.STORAGE
const remove = (file) => {
  const filename = path.resolve(file)
  const unlink = P.promisify(fs.unlink)
  return unlink(filename)
}

module.exports = (req, res) => {
  item.findOne({ where: { id: req.params.id } })
    .then((item) => remove(item.image))
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(400).json({ error }))
}
