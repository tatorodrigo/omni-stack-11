const { Segments, Joi } = require("celebrate");

module.exports = {
  Ong: {
    create: {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string()
          .required()
          .email(),
        whatsapp: Joi.string()
          .required()
          .regex(/(\+[0-9]{2,3})?[0-9]{10,11}/),
        city: Joi.string().required(),
        uf: Joi.string()
          .required()
          .length(2)
      })
    }
  },
  Profile: {
    list: {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    }
  },
  Incident: {
    delete: {
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    },
    list: {
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    },
    create: {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string()
          .required()
          .min(3)
          .max(50),
        description: Joi.string()
          .required()
          .max(255),
        value: Joi.number().required()
      })
    }
  }
};
