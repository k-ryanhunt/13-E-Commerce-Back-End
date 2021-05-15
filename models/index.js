const category = require("./category");
const product = require("./product");
const productTag = require("./productTag");
const tag = require("./tag");

product.belongsTo(category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

category.hasMany(product, {
  foreignKey: "category_id",
});

product.belongsToMany(tag, {
  through: productTag,
  foreignKey: "product_id",
});

tag.belongsToMany(product, {
  through: productTag,
  foreignKey: "tag_id",
});

module.exports = {
  product,
  category,
  tag,
  productTag,
};