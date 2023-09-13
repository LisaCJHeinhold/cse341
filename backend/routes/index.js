const getController = require('../controllers/getControllers.js');
const routes = require('express').Router();

routes.get('/professional', getController.GetAllContacts);

module.exports = routes