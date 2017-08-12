const ProductAttributes = ['unit', 'quantity']

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Product.associate = (models) => {
    Product.belongsTo(models.User)
    Product.hasOne(models.Item)
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
