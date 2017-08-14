const ProductAttributes = ['unit', 'unitPrice', 'code']

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('product', {
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unitPrice: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
      include: [{
        model: Item,
        attributes: ['name', 'description', 'image']
      }],
      attributes: ProductAttributes
    })
    .then(products =>
      !products ? Promise.reject('No products')
      : products
    )

  return Product
}
