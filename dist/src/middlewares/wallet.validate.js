"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            console.log("error", error);
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};
exports.validate = validate;
