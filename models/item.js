const ItemAttributes = ['id', 'name', 'description', 'image']

module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define('item', {
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

  Item.associate = (models) => {
    Item.belongsTo(models.user)
    Item.hasMany(models.product)
  }

  Item.getItemsByUser = user =>
    Item.findAll({
      where: { userId: user.id },
      attributes: ItemAttributes
    })
    .then(items =>
      !items ? Promise.reject('No items')
      : items
    )

  return Item
}
