const ProductAttributes = [ 'id', 'unit', 'unitPrice', 'code' ]
const { propEq, find } = require('ramda')
module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('product', {
    unit: DataTypes.STRING,
    unitPrice: DataTypes.STRING,
    code: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Product.associate = (models) => {
    Product.belongsTo(models.user)
    Product.belongsTo(models.item)
  }

  Product.getProductsByUser = (user, Item) =>
    Product.findAll({
      where: { userId: user.id },
      include: [ {
        model: Item,
        attributes: [ 'name', 'description', 'image' ]
      } ],
      attributes: ProductAttributes
    })
      .then(products =>
        !products ? Promise.reject('No products')
          : products
      )

  Product.searchByCode = (user, code ,Item) =>
    Product.findOne({
      where: { userId: user.id, code },
      include: [ {
        model: Item,
        attributes: [ 'name', 'description', 'image' ]
      } ],
      attributes: ProductAttributes
    })
      .then(products =>
        !products ? Promise.reject('No products')
          : products
      )

  Product.prototype.makeDetails = function (details) {
    const { quantity } = find(propEq('id', this.id))
    return {
      productId: this.id,
      total: this.unitPrice * quantity,
      userId: this.userId,
      quantity: quantity
    }
  }
  return Product
}
