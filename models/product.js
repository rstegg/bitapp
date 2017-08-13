const ProductAttributes = ['unit', 'unitPrice']

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('product', {
    unit: {
      type: DataTypes.STRING,
      unique: true
    },
    unitPrice: {
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
