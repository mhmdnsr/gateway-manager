const express =  require('express');
const gatewayController = require('../controllers/gateway.controller');

const router = express.Router();

router.post('/verifySerialNumber', gatewayController.verifySerialNumber);

router.get('/all', gatewayController.getAllGateways);

router.get('/:id', gatewayController.getGateWayById);

router.post('/', gatewayController.addGateway);

router.put('/', gatewayController.updateGateway);

router.delete('/:id', gatewayController.deleteGateway);

module.exports = router;
