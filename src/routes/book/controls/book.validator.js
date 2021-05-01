const Joi = require("joi");
const schema = require("./book.model");

function validateBook(book) {
  return schema.validate(book);
}

module.exports = validateBook;
