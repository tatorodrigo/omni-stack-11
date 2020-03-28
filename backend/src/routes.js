const express = require("express");
const { celebrate } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const Validators = require("./validators");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.post("/ongs", celebrate(Validators.Ong.create), OngController.create);
routes.get("/ongs", OngController.list);

routes.post(
  "/incidents",
  celebrate(Validators.Incident.create),
  IncidentController.create
);
routes.get(
  "/incidents",
  celebrate(Validators.Incident.list),
  IncidentController.list
);
routes.delete(
  "/incidents/:id",
  celebrate(Validators.Incident.delete),
  IncidentController.delete
);

routes.get(
  "/profile",
  celebrate(Validators.Profile.list),
  ProfileController.list
);

module.exports = routes;
