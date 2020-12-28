var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var productSchema = mongoose.Schema({
  name: String,
  price: String,
  size: String,
  quality: String,
});
const Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
	const schema = Joi.object({
	  name: Joi.string().min(3).max(20).required(),
	  price: Joi.number().min(0).required(),
    size: Joi.string().required(),
    quality: Joi.string().required()
	});
	return schema.validate(data, { abortEarly: false });
  }
  module.exports.Product = Product;
  module.exports.validate = validateProduct;
