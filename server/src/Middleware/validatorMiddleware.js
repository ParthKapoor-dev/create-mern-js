const jwt = require("jsonwebtoken");

function validate(validator) {
  return (req, res, next) => {
    const { error } = validator.validate(req.body);

    if (!error)
      return next();
    else {
      console.log(error);
      return next(error);
    }
  }
}

module.exports = validate