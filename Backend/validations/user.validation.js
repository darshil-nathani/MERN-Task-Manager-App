const joi = require('joi');

const createUSerSchema = joi.object({
    name : joi.string().required(),
    email : joi.string().email().required(),
    password : joi.string().min(3).required()
                .pattern(/[a-z]/)
                .pattern(/[A-Z]/)
                .pattern(/[0-9]/)
                .pattern(/[\W_]/)
});

module.exports = {
    createUSerSchema
}