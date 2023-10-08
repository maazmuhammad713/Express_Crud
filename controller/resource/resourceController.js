const Joi = require("joi");
const resourceService = require("../../service/resourceService");
//We do validations in controller
//We can use joi package for validation
//We can use express-async-errors package for error handling
//We can use winston package for logging
//We can use config package for configuration
//We can use debug package for debugging
//We can use helmet package for security
//We can use morgan package for http request logging
//We can use compression package for compressing http request
//We can use express-async-errors package for error handling
//We can use joi-password-complexity package for password complexity
//We can use jsonwebtoken package for authentication
//We can use bcrypt package for password hashing
//We can use lodash package for utility functions
//We can use moment package for date and time
//We can use mongoose package for mongodb
//We can use fawn package for transactions
//We can use joi-objectid package for validating object id
//We can use multer package for file uploading
//We can use winston-mongodb package for logging to mongodb
//We can use express-fileupload package for file uploading
//We can use nodemailer package for sending emails

//We will demonstrate joi validation in this example
//example:

const resourceSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  book: Joi.string().required(),
  task: Joi.string().required(),
  note: Joi.string().required(),
});

module.exports = {
  getResources: (req, res) => {
    const data = resourceService.getResources(req.body);
    res.send(data);
  },
  getResourceByID: (req, res) => {
    const data = resourceService.getResourceByID(req.params.id);
    res.send(data);
  },

  updateResource: (req, res) => {
    const data = resourceService.updateResource(req.params.id, req.body);
    res.send(data);
  },
  deleteResource: (req, res) => {
    const data = resourceService.deleteResource(req.params.id);
    res.send(data);
  },
  addResource: (req, res) => {
    try {
      const validate = resourceSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = resourceService.addResource(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};
