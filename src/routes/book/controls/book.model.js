const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number().integer(),
  title: Joi.string().min(1).required(),
  author: Joi.string().min(3).required(),
  ISBN: Joi.number().integer().required(),
  releaseDate: Joi.string(),
});

module.exports = schema;
